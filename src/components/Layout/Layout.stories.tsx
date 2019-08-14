import React from "react"
import { addUIComponent } from "utils/storybook"
import Layout, { ILayoutProps } from "./Layout"

const propsFn = (): ILayoutProps => ({
  children: null
})

addUIComponent("Layout").add("default", () => <Layout {...propsFn()} />)
