//@ts-ignore
import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { Spinner } from "baseui/spinner"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
import { Card, StyledBody, StyledAction } from "baseui/card"
import { Button } from "baseui/button"

import { GetAllDeals_deals } from "types/GetAllDeals"

export default function DealsList(): React.ReactElement {
  const { loading, error, data } = useQuery(GET_ALL_DEALS)

  if (loading) return <Spinner />
  if (error) return <div>Error! {error.message}</div>
  return (
    <FlexGrid
      flexGridColumnCount={[1, 1, 2, 2]}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale1000"
    >
      {data.deals.map(
        ({
          createdAt,
          updatedAt,
          id,
          isPublic,
          productName,
          stockQuantity,
          unityPrice,
          discountedQuantity,
          discountedPrice,
          user
        }: GetAllDeals_deals) => (
          <FlexGridItem key={id}>
            <Card
              //   overrides={{ Root: { style: { width: "328px" } } }}
              headerImage={"https://source.unsplash.com/user/erondu/700x400"}
              title={productName}
            >
              <StyledBody>
                {/* <h5>{unityPrice}</h5>
                <h5>{discountedQuantity}</h5>
                <h5>{discountedPrice}</h5> */}
              </StyledBody>
              <StyledAction>
                <Button>Button Label</Button>
              </StyledAction>
            </Card>
          </FlexGridItem>
        )
      )}
    </FlexGrid>
  )
}

const GET_ALL_DEALS = gql`
  query GetAllDeals {
    deals(order_by: { createdAt: desc }) {
      createdAt
      updatedAt
      id
      isPublic
      productName
      stockQuantity
      unityPrice
      discountedQuantity
      discountedPrice
      user {
        id
        email
      }
    }
  }
`
