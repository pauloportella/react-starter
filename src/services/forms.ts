import React from "react"
import * as Yup from "yup"
// import { RadioTypes } from "components/form-elements/RadioButton/RadioButton"

export interface IOptions {
  label: string
  value: string
}

export interface IField {
  id: string
  label: string
  multiline?: boolean
  options?: IOptions[] | string[]
  initialValue: string | number | {}
  component?: React.ReactNode | "input" | "select" | "textarea"
  validation:
    | Yup.MixedSchema
    | Yup.StringSchema
    | Yup.NumberSchema
    | Yup.BooleanSchema
    | Yup.DateSchema
  // type?: RadioTypes
}

export enum ValidationsRules {
  DEFAULT = "DEFAULT",
  DATE = "DATE",
  CURRENCY = "CURRENCY"
}

export { getInitialValues, generateValidationSchema, getValidationRules }

function getInitialValues(fields) {
  return fields.reduce((acc, { id, initialValue }) => {
    return {
      ...acc,
      [id]: initialValue
    }
  }, {})
}
function generateValidationSchema(fields) {
  const obj = fields.reduce((acc, { id, validation }) => {
    return {
      ...acc,
      [id]: validation
    }
  }, {})

  return Yup.object().shape({
    ...obj
  })
}

interface IValidationRules {
  type: ValidationsRules
  requiredMessage?: string
  validationMessage: string
}

function getValidationRules({
  type,
  requiredMessage,
  validationMessage
}: IValidationRules) {
  let validationRule

  if (type === ValidationsRules.DEFAULT) validationRule = Yup.string()
  if (requiredMessage) validationRule.required(requiredMessage)

  return validationRule
}

// const mobile = Yup.string()
//   .required(requiredFieldMessage)
//   .matches(/^(\+|\d)[\d\s]{5,}$/, validationMessage)
