import React from "react"
import Enzyme, { mount, ReactWrapper } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

import Header, { IHeaderProps } from "./Header"

const propsFn = (): IHeaderProps => ({
  children: null
})

it("Header renders with sucess.", () => {
  const wrapper: ReactWrapper = mount(<Header {...propsFn()} />)
  expect(wrapper.find(Header).exists()).toBe(true)
})
