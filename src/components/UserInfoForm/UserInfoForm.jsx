import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { USER_VALIDATION_SCHEMA } from "../../utils/validateYup";


function UserInfoForm() {
  const userInitialValues = { firstName: "" };
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form>
            <Field
              type="text"
              placeholder="Your name"
              autoFocus
              name="firstName"
            />
           <ErrorMessage name='firstName'/>
            <button type="submit">Save</button>
            <button type="reset" disabled={!formikProps.dirty}>
              Reset
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
