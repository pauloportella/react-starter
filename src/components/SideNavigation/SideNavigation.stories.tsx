import React from "react"
import { addUIComponent } from "utils/storybook"
import SideNavigation from "./SideNavigation"

addUIComponent("SideNavigation").add("default", () => <SideNavigation />)
