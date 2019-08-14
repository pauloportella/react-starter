import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Providers } from "providers"
import { Home } from "pages"
import { Layout } from "components"

function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  )
}

export function App(): React.ReactElement {
  return (
    <Providers>
      <Suspense
        fallback={
          <>
            <h1>Loading...</h1>
          </>
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
