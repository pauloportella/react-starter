import React from "react"
import { Form, FormProps, IField } from "@pauloportella/form-generator"
import { Input } from "baseui/input"
import { H3 } from "baseui/typography"
import * as Yup from "yup"
import { Label } from "components"
import { Button as StyledButton, SIZE } from "baseui/button"

const fields: IField[] = [
  {
    component: Input,
    placeholder: "Name",
    id: "name",
    initialValue: "",
    label: "Name",
    validation: Yup.string().required(),
    type: "text"
  },
  {
    component: Input,
    placeholder: "City",
    id: "city",
    initialValue: "",
    label: "City",
    validation: Yup.string().required(),
    type: "text"
  },
  {
    component: Input,
    placeholder: "State",
    id: "state",
    initialValue: "",
    label: "State",
    validation: Yup.string().required(),
    type: "text"
  },
  {
    component: Input,
    placeholder: "Country",
    id: "Country",
    initialValue: "",
    label: "Country",
    validation: Yup.string().required(),
    type: "text"
  }
]

function Title(): React.ReactElement {
  return <H3 margin="12px 0">Company Details</H3>
}

function Button(): React.ReactElement {
  return (
    <StyledButton
      overrides={{
        BaseButton: {
          style: {
            width: "100%",
            marginTop: "32px"
          }
        }
      }}
      size={SIZE.default}
    >
      SAVE
    </StyledButton>
  )
}

const propsFn = (): FormProps => ({
  title: Title,
  onSubmit: (values: any) => console.log(values),
  fields,
  labelComponent: Label,
  buttonComponent: Button
})

export default function NewCompaniesForm(): React.ReactElement {
  return (
    <div style={{ width: "40%" }}>
      <Form {...propsFn()} />
    </div>
  )
}
