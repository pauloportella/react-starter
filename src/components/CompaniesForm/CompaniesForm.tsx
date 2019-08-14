import * as React from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Formik, FormikActions, FormikProps, Form, Field } from "formik"
import gql from "graphql-tag"
import { getNames } from "country-list"
import { AddCompany, AddCompanyVariables } from "types/AddCompany"
import { UpdateCompany, UpdateCompanyVariables } from "types/UpdateCompany"
import { CompanyDetails } from "types/CompanyDetails"
import { H3 } from "baseui/typography"
import { Button, SIZE } from "baseui/button"
import { Input } from "baseui/input"
import { Select, Label } from "components"

const countries = getNames()
const countriesOptions = countries =>
  countries.map(country => ({
    label: country,
    value: country
  }))

const ADD_COMPANY = gql`
  mutation AddCompany(
    $name: String!
    $address1: String!
    $address2: String!
    $country: String!
    $county: String!
    $postcode: String!
    $email: String!
    $phoneOffice: String!
    $mobile: String!
    $website: String!
    $vat: String!
  ) {
    insert_companies(
      objects: {
        name: $name
        address1: $address1
        address2: $address2
        country: $country
        county: $county
        postcode: $postcode
        email: $email
        phoneOffice: $phoneOffice
        mobile: $mobile
        website: $website
        vat: $vat
      }
    ) {
      affected_rows
      returning {
        id
        name
        address1
        address2
        country
        county
        postcode
        email
        phoneOffice
        mobile
        website
        vat
        userId
      }
    }
  }
`
const UPDATE_COMPANY = gql`
  mutation UpdateCompany(
    $id: uuid
    $name: String!
    $address1: String!
    $address2: String!
    $country: String!
    $county: String!
    $postcode: String!
    $email: String!
    $phoneOffice: String!
    $mobile: String!
    $website: String!
    $vat: String!
  ) {
    update_companies(
      where: { id: { _eq: $id } }
      _set: {
        name: $name
        address1: $address1
        address2: $address2
        country: $country
        county: $county
        postcode: $postcode
        email: $email
        phoneOffice: $phoneOffice
        mobile: $mobile
        website: $website
        vat: $vat
      }
    ) {
      affected_rows
      returning {
        id
        name
        address1
        address2
        country
        county
        postcode
        email
        phoneOffice
        mobile
        website
        vat
        userId
      }
    }
  }
`

const COMPANY_DETAILS = gql`
  query CompanyDetails {
    companies {
      id
      name
      address1
      address2
      country
      county
      postcode
      email
      phoneOffice
      mobile
      website
      vat
      isLoggedIn @client
    }
  }
`

function CompaniesForm(): React.ReactElement {
  const { data, loading } = useQuery<CompanyDetails>(COMPANY_DETAILS, {
    onError: error => {
      throw new Error(error.message)
    }
  })

  const [addCompany] = useMutation<AddCompany, AddCompanyVariables>(
    ADD_COMPANY,
    {
      onError: error => {
        throw new Error(error.message)
      },
      refetchQueries: COMPANY_DETAILS
    }
  )

  const [updateCompany] = useMutation<UpdateCompany, UpdateCompanyVariables>(
    UPDATE_COMPANY,
    {
      onError: error => {
        throw new Error(error.message)
      },
      refetchQueries: COMPANY_DETAILS
    }
  )

  if (loading) return <div>Loading...</div>

  const hasCompany = Boolean(data!.companies.length > 0)

  const company = data!.companies[0]

  const initialValues = {
    name: (company !== undefined && company.name) || "",
    address1: (company !== undefined && company.address1) || "",
    address2: (company !== undefined && company.address2) || "",
    country: (company !== undefined && company.country) || "",
    county: (company !== undefined && company.county) || "",
    postcode: (company !== undefined && company.postcode) || "",
    email: (company !== undefined && company.email) || "",
    phoneOffice: (company !== undefined && company.phoneOffice) || "",
    mobile: (company !== undefined && company.mobile) || "",
    website: (company !== undefined && company.website) || "",
    vat: (company !== undefined && company.vat) || ""
  }

  console.log(data !== undefined && data)

  return (
    <div style={{ width: "40%" }}>
      <H3 margin="12px 0">Company Details</H3>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: AddCompanyVariables,
          actions: FormikActions<AddCompanyVariables>
        ) => {
          if (hasCompany === false)
            addCompany({
              variables: values
            })
          else {
            updateCompany({
              variables: values
            })
          }

          actions.setSubmitting(false)
          actions.resetForm(values)
        }}
        render={({
          values,
          handleChange,
          handleBlur,
          submitForm,
          setFieldValue
        }: FormikProps<AddCompanyVariables>) => {
          return (
            <Form>
              <label htmlFor="name" className="">
                <Label>Name</Label>
              </label>
              <Field
                placeholder="Company Name"
                id="name"
                type="text"
                component={Input}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <label htmlFor="address1">
                <Label>Address</Label>
              </label>
              <Field
                placeholder="Address"
                id="address1"
                type="text"
                value={values.address1}
                component={Input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="address2">
                <Label>Address 2</Label>
              </label>
              <Field
                placeholder="Address 2"
                id="address2"
                type="text"
                value={values.address2}
                component={Input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="country">
                <Label>Country</Label>
              </label>
              <Field
                placeholder="Country"
                id="country"
                name="country"
                type="text"
                value={values.country}
                component={Select}
                onChange={setFieldValue}
                onBlur={handleBlur}
                options={countriesOptions(countries)}
              />
              <Button
                onClick={submitForm}
                overrides={{
                  BaseButton: {
                    style: {
                      width: "100%",
                      marginTop: "32px"
                    }
                  }
                }}
                size={SIZE.default}
              >
                SAVE
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default CompaniesForm
