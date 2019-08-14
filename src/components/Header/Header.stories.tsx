import React from "react"
import { addUIComponent } from "utils/storybook"
import Header, { IHeaderProps } from "./Header"

const propsFn = (): IHeaderProps => ({
  children: null
})

addUIComponent("Header").add("default", () => <Header {...propsFn()} />)
