import React from "react"
import App from "core/App"
import { mount, ReactWrapper } from "enzyme"

it("Renders the app without crashing", () => {
  const wrapper: ReactWrapper = mount(<App />)
  expect(wrapper.find(App).exists()).toBe(true)
})
