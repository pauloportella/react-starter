import React from "react"
import { StatefulInput as StyledInput, StatefulInputProps } from "baseui/input"
import { FormikHandlers, FieldProps } from "formik"

export interface IInputProps extends StatefulInputProps {
  name: string
  placeholder?: string
  onChange: FormikHandlers["handleChange"]
  onBlur?: FormikHandlers["handleBlur"]
  value?: string
  field?: FieldProps
}

export default function Input({
  field,
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  value,
  ...props
}: IInputProps): React.ReactElement {
  // const [state, setState] = React.useState<string>(value!)

  const handleChange = event => {
    // setState(event.currentTarget.value)
    onChange(event)
  }
  return (
    <StyledInput
      type={type}
      id={name}
      name={name}
      onChange={handleChange}
      // placeholder={placeholder}
      {...props}
      {...field}
      value={"hello"}
    />
  )
}
