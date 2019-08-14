/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCompany
// ====================================================

export interface UpdateCompany_update_companies_returning {
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

export interface UpdateCompany_update_companies {
  __typename: "companies_mutation_response"
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number
  /**
   * data of the affected rows by the mutation
   */
  returning: UpdateCompany_update_companies_returning[]
}

export interface UpdateCompany {
  /**
   * update data of the table: "companies"
   */
  update_companies: UpdateCompany_update_companies | null
}

export interface UpdateCompanyVariables {
  id?: any | null
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
