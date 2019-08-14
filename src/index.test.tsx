import React from "react"
import ReactDOM from "react-dom"
import { App } from "core/App"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe("Renders the app without crashing", () => {
  const { getByTestId } = render(<App />)

  it("check container", () => {
    const element = getByTestId("root-container")
    expect(element).toBeInTheDocument()
  })

  it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
