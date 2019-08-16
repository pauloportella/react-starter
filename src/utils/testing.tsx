import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "config/theme/theme"
import { render } from "@testing-library/react"
import "jest-styled-components"

export function renderWithTheme(component: JSX.Element) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}
