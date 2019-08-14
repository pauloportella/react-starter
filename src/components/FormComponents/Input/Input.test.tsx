import React from "react"
import { mount, ReactWrapper } from "enzyme"

import Input from "./Input"

it("Renders the input without crashing", () => {
  const wrapper: ReactWrapper = mount(<Input name="input" />)
  expect(wrapper.find(Input).exists()).toBe(true)
})
