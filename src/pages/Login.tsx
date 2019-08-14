import React from "react"
import { FlexGrid } from "baseui/flex-grid"
import { Card, StyledAction } from "baseui/card"
import { Button, SIZE } from "baseui/button"
import { styled } from "baseui"

import { Input } from "components"

export default function Login(): React.ReactElement {
  return (
    <Container>
      <LoginCard />
    </Container>
  )
}

const LoginCard: React.FC = () => (
  <Card
    overrides={{
      Root: {
        style: {
          width: "440px"
        }
      }
    }}
  >
    <CardContent>
      <Input name="email" placeholder="Email" onChange={() => {}} />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        onChange={() => {}}
      />
      <StyledAction>
        <Button
          overrides={{
            BaseButton: {
              style: {
                width: "100%"
              }
            }
          }}
          size={SIZE.default}
        >
          LOGIN
        </Button>
      </StyledAction>
    </CardContent>
  </Card>
)

const Container: React.FC = ({ children }) => (
  <FlexGrid
    height="100vh"
    width="100%"
    justifyContent="center"
    alignItems="center"
    margin={0}
    padding={0}
  >
    {children}
  </FlexGrid>
)

const CardContent = styled("div", {
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "column",
  height: "180px"
})
