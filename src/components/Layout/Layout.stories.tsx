import React from "react"
import { addUIComponent } from "utils/storybook"
import { Layout, LayoutProps } from "./Layout"

const Children = () => <h1>Hello</h1>

const propsFn = (): LayoutProps => ({
  children: <Children />
})

addUIComponent("Layout").add("default", () => <Layout {...propsFn()} />)
