import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter as Router } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import { Layout } from "./Layout"

it("Layout renders with sucess.", () => {
  const wrapper = shallow(
    <Router>
      <Layout />
    </Router>
  )
  expect(wrapper.find(Layout).exists()).toBe(true)
})
