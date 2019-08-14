import React from "react"
import { addFormElement } from "utils/storybook"

import Input, { IInputProps } from "./Input"

const propsFn = (): IInputProps => ({
  name: "input",
  placeholder: "Name",
  onChange: () => {}
})

addFormElement("Input").add("default", () => <Input {...propsFn()} />)
