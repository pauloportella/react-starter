import React from "react"
import { addFormElement } from "utils/storybook"

import { CompaniesForm } from "components"

// const propsFn = (): IInputProps => ({
//   name: "input",
//   placeholder: "Name"
// })

addFormElement("CompaniesForm").add("default", () => <CompaniesForm />)
