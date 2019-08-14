import React from "react"
import { BaseProvider, LightTheme } from "baseui"
import { Provider as StyletronProvider } from "styletron-react"
import { Client as Styletron } from "styletron-engine-atomic"

import Apollo from "./Apollo"

const styletronEngine = new Styletron()

export default function Providers({ children }): React.ReactElement {
  return (
    <Apollo>
      <StyletronProvider value={styletronEngine}>
        <BaseProvider theme={LightTheme}>{children}</BaseProvider>
      </StyletronProvider>
    </Apollo>
  )
}
