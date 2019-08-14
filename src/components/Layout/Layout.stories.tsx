import React from "react"
import { addUIComponent } from "utils/storybook"
import { Layout, LayoutProps } from "./Layout"

const propsFn = (): LayoutProps => ({
  children: null
})

addUIComponent("Layout").add("default", () => <Layout {...propsFn()} />)
