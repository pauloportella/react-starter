import fetch from "unfetch"
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

import { BaseProvider, LightTheme } from "baseui"
import { Provider as StyletronProvider } from "styletron-react"
import { Client as Styletron } from "styletron-engine-atomic"

import { ThemeProvider } from "styled-components"
import theme from "config/theme/theme"
// import useAuth from "services/autentication"

const styletronEngine = new Styletron()

function createApolloClient(accessToken?: string) {
  const authMiddleware = setContext(async (req, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : ""
      }
    }
  })

  const httpLink = new HttpLink({
    uri: "https://crowd-buying.herokuapp.com/v1/graphql",
    fetch: fetch
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

  const cache = new InMemoryCache({
    freezeResults: true
  })

  return new ApolloClient({
    link: from([authMiddleware, terminatingLink]),
    cache,
    assumeImmutableResults: true
  })
}

interface ProvidersProps {
  children?: React.ReactNode
}

export function Providers({ children }: ProvidersProps): React.ReactElement {
  // const [accessToken, authData] = useAuth()
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StyletronProvider value={styletronEngine}>
          <BaseProvider theme={LightTheme}>{children}</BaseProvider>
        </StyletronProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
