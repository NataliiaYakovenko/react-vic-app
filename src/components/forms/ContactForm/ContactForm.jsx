import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { CONTACT_VALIDATION_SCHEMA } from "../../../utils/validateYup";

function ContactForm() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    birthday: "",
  };
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form>
            <label>
              <span>
                <Field />
                <ErrorMessage />
              </span>
            </label>

            <label>
              <span>
                <Field />
                <ErrorMessage />
              </span>
            </label>

            <label>
              <span>
                <Field />
                <ErrorMessage />
              </span>
            </label>

            <label>
              <span>
                <Field />
                <ErrorMessage />
              </span>
            </label>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
