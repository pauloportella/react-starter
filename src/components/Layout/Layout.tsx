import React from "react"
import styled from "styled-components"
import { withRouter, RouteComponentProps } from "react-router-dom"

// import { Header } from "components"

export interface ILayoutProps {
  children?: React.ReactNode
}

function Layout({ children, location }: ILayoutProps & RouteComponentProps) {
  const isLogin = location.pathname === "/login"

  if (isLogin) return children
  return (
    <StyledLayout>
      {/* <Header /> */}
      {/* <SideNavigation /> */}
      <Main>{children}</Main>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  height: 100vh;
  /* width: calc(100vw - 77px); */
`

const Main = styled.div`
  padding-top: 73px;
  padding: 73px 64px 0;
  /* padding-left: 250px; */
`

export default withRouter(Layout as any)
