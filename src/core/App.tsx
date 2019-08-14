import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Amplify, { Auth } from "aws-amplify"
import awsmobile from "../aws-exports"
import { withAuthenticator } from "aws-amplify-react" // or 'aws-amplify-react-native';
import { useApolloClient } from "@apollo/react-hooks"

import Providers from "providers"
import { Home, Login } from "pages"
import { Layout, CompaniesForm, NewCompaniesForm } from "components"

Amplify.configure(awsmobile)

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  defaultCountryCode: "44",
  signUpFields: [
    {
      label: "My user name",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "string"
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password"
    }
  ]
}

function Routes(): React.ReactElement {
  const { cache } = useApolloClient()

  React.useEffect(() => {
    async function setCurrentUser() {
      Auth.currentAuthenticatedUser().then(user => {
        cache.writeData({
          data: {
            companies: {
              __typename: "companies",
              // userId: user.username,
              isLoggedIn: Boolean(user.username)
            }
          }
        })
        // writeData({
        //   data: {
        //     Auth: {
        //       // userId: user.username
        //     }
        //   }
        // })
        // writeData({
        //   data: {
        //     userId: user.signInUserSession.username
        //   }
        // })
      })
    }
    setCurrentUser()
    // eslint-disable-next-line
  }, [])

  const Form = () => (
    <div
      style={{
        width: "100vw",
        height: "100%",
        display: "flex"
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex"
        }}
      >
        <CompaniesForm />
      </div>
      <div
        style={{
          width: "50%",
          display: "flex"
        }}
      >
        <NewCompaniesForm />
      </div>
    </div>
  )

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Form} />
    </Switch>
  )
}

function App() {
  return (
    <Providers>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </Suspense>
    </Providers>
  )
}

export function MockApp({ children }): React.ReactElement {
  return (
    <Providers>
      <Router>{children}</Router>
    </Providers>
  )
}

export default withAuthenticator(App, { signUpConfig })
