import React from "react"
// import { Heading, HeadingLevel } from "baseui/heading"

// import gql from "graphql-tag"
import { Auth } from "aws-amplify"
// import { useQuery } from "@apollo/react-hooks"

// import { DealsList } from "components"

export default function Home(): React.ReactElement {
  // const { data, error, loading } = useQuery(GET_ALL_USERS)
  const [authState, setAuthState] = React.useState("loading")

  React.useEffect(() => {
    Auth.currentAuthenticatedUser().then(user => {
      // console.log(user)
      setAuthState("signedIn")
    })
  }, [authState])

  // async function logout() {
  //   Auth.signOut().then(() => {
  //     setAuthState("signIn")
  //   })
  // }
  // if (loading) return <h2>Loading...</h2>
  // if (error) return <div>Error! {error.message}</div>
  return (
    <div>
      {/* <HeadingLevel>
        <Heading styleLevel={5}>Dashboard</Heading>
      </HeadingLevel> */}

      {/* <div>
        {data.users.map(user => (
          <React.Fragment key={user.id}>
            <pre>{user.id}</pre>
            <pre>{user.email}</pre>
          </React.Fragment>
        ))}
      </div>

      <button onClick={() => logout()}>logout</button> */}

      {/* <DealsList /> */}
    </div>
  )
}

// const GET_ALL_USERS = gql`
//   query GetAllUsers {
//     users(order_by: { createdAt: desc }) {
//       id
//       email
//       createdAt
//     }
//   }
// `
