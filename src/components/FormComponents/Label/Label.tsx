import React from "react"
import { Label1 as LabelBase } from "baseui/typography"

export default function Label({ children, ...rest }): React.ReactElement {
  return (
    <LabelBase marginBottom={"16px"} marginTop="16px" {...rest}>
      {children}
    </LabelBase>
  )
}
