/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllDeals
// ====================================================

export interface GetAllDeals_deals_user {
  __typename: "users"
  id: string
  email: string | null
}

export interface GetAllDeals_deals {
  __typename: "deals"
  createdAt: any | null
  updatedAt: any | null
  id: any
  isPublic: boolean
  productName: string
  stockQuantity: number
  unityPrice: any
  discountedQuantity: number
  discountedPrice: any
  /**
   * An object relationship
   */
  user: GetAllDeals_deals_user
}

export interface GetAllDeals {
  /**
   * fetch data from the table: "deals"
   */
  deals: GetAllDeals_deals[]
}
