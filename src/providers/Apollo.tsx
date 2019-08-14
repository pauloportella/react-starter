import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "apollo-client"
import { getMainDefinition } from "apollo-utilities"
import { InMemoryCache } from "apollo-cache-inmemory"
import { split, from } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { WebSocketLink } from "apollo-link-ws"
import { setContext } from "apollo-link-context"
import { OperationDefinitionNode } from "graphql"
import gql from "graphql-tag"

import useAuth from "services/autentication"

const createApolloClient = (accessToken, auth) => {
  const authMiddleware = setContext(async (req, { headers }) => {
    const token = accessToken
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    }
  })

  const httpLink = new HttpLink({
    uri: "https://crowd-buying.herokuapp.com/v1/graphql"
  })

  const wsLink = new WebSocketLink({
    uri: "ws://crowd-buying.herokuapp.com/v1/graphql",
    options: {
      reconnect: true
    }
  })

  const terminatingLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(
        query
      ) as OperationDefinitionNode
      return kind === "OperationDefinition" && operation === "subscription"
    },
    wsLink,
    httpLink
  )

  const typeDefs = gql`
    extend type companies {
      isLoggedIn: Boolean!
      isThisRealLife: String!
    }
  `

  const resolvers = () => {
    return {
      companies: {
        x: () => auth.username,
        isLoggedIn: () => Boolean(auth.username)
      }
    }
  }

  const cache = new InMemoryCache({
    freezeResults: true
  })

  return new ApolloClient({
    link: from([authMiddleware, terminatingLink]),
    cache,
    assumeImmutableResults: true,
    typeDefs,
    resolvers: resolvers()
  })
}

export default function Apollo({ children }): React.ReactElement {
  const [accessToken, authData] = useAuth()
  const client = createApolloClient(accessToken, authData)

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
