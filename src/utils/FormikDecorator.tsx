import React from "react"
import { Form, Formik, FormikProps } from "formik"

/**
 * Decorates a story with Formik
 * @param initialValues
 * @param validationSchema - yup schema (formik validationSchema)
 * @returns {function(*): *}
 */

const FormikDecorator = (initialValues, validationSchema) => story => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={values => console.log(values)}
    render={(formProps: FormikProps<any>) => <Form>{story(formProps)}</Form>}
  />
)

export default FormikDecorator
