import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 2vh 4vw;
  width: 100vw;
  max-width: 1000px;
  height: 100vh;

  box-sizing: border-box;
`

export function LayoutDecorator(storyFn) {
  return <Layout>{storyFn()}</Layout>
}

const LayoutForFluid = styled.div`
  margin: 0 auto;
  padding: 30vh 25vw;
  width: 100vw;
  height: 100vh;

  box-sizing: border-box;
`

export function FluidLayoutDecorator(storyFn) {
  return <LayoutForFluid>{storyFn()}</LayoutForFluid>
}
