import React from "react"
import { Auth } from "aws-amplify"

export default function useAuth() {
  const [ACCESS_TOKEN, setACCESS_TOKEN] = React.useState("")
  const [authData, setAuthData] = React.useState({})

  async function setToken() {
    Auth.currentAuthenticatedUser().then(user => {
      setACCESS_TOKEN(user.signInUserSession.idToken.jwtToken)
      setAuthData(user)
    })
  }

  React.useEffect(() => {
    setToken()
  }, [])

  return [ACCESS_TOKEN, authData]
}

export { Auth }
