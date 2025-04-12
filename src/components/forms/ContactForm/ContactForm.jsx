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
              <span>Name:</span>
              <Field type='text' name='name' placeholder='Your name' autoFocus/>
              <ErrorMessage name='name' component='span'/>
            </label>

            <label>
              <span>Phone Number:</span>
              <Field type='tel' name='phone' placeholder='+380 00 000 00 00' />
              <ErrorMessage name='phone'component='span'/>
            </label>

            <label>
              <span>Email:</span>
              <Field type='email' name='email' placeholder='email@gmail.com'/>
              <ErrorMessage name='email' component='span'/>
            </label>

            <label>
              <span>Birthday:</span>
              <Field type='date' name='birthday' />
              <ErrorMessage name='birthday' component='span'/>
            </label>

            <button type="submit">Save</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
