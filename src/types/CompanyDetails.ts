/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CompanyDetails
// ====================================================

export interface CompanyDetails_companies {
  __typename: "companies"
  id: any
  name: string | null
  address1: string | null
  address2: string | null
  country: string | null
  county: string | null
  postcode: string | null
  email: string | null
  phoneOffice: string | null
  mobile: string | null
  website: string | null
  vat: string | null
  isLoggedIn: boolean
}

export interface CompanyDetails {
  /**
   * fetch data from the table: "companies"
   */
  companies: CompanyDetails_companies[]
}
