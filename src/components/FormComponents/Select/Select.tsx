import React from "react"
import { Select as StyledSelect } from "baseui/select"

// interface ISelectProps {
//   id: string
//   value: IOption
//   onChange: (value) => void
//   options: IOption[]
// }

export default function Select({
  options,
  field: { name, value = "", onChange, onBlur }
}): React.ReactElement {
  const [state, setState] = React.useState([{ label: value, value: value }])

  const handleChange = event => {
    setState(event.option)
    onChange({
      target: {
        name,
        value: event.option.value
      }
    })
  }
  return (
    <StyledSelect
      labelKey="label"
      valueKey="value"
      options={options}
      onChange={handleChange}
      value={state}
      onBlur={onBlur}
    />
  )
}
