/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddCompany
// ====================================================

export interface AddCompany_insert_companies_returning {
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
  userId: string
}

export interface AddCompany_insert_companies {
  __typename: "companies_mutation_response"
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number
  /**
   * data of the affected rows by the mutation
   */
  returning: AddCompany_insert_companies_returning[]
}

export interface AddCompany {
  /**
   * insert data into the table: "companies"
   */
  insert_companies: AddCompany_insert_companies | null
}

export interface AddCompanyVariables {
  name: string
  address1: string
  address2: string
  country: string
  county: string
  postcode: string
  email: string
  phoneOffice: string
  mobile: string
  website: string
  vat: string
}
