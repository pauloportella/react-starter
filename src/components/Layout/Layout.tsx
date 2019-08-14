import React from "react"
import styled from "styled-components"

export interface LayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Main>{children}</Main>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  height: 100%;
  width: 100%;
`

const Main = styled.div``
