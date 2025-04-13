import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { CONTACT_VALIDATION_SCHEMA } from "../../../utils/validateYup";
import styles from "./ContactForm.module.sass";
import classNames from "classnames/bind";

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
        const nameClassNames = classNames(styles.input, {
          [styles.valid]: !formikProps.errors.name && formikProps.touched.name,
          [styles.invalid]: formikProps.errors.name && formikProps.touched.name,
        });

        const phoneClassNames = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.phone && formikProps.touched.phone,
          [styles.invalid]:
            formikProps.errors.phone && formikProps.touched.phone,
        });
        return (
          <Form className={styles.form}>
            <label className={styles.lable}>
              <span>Name:</span>
              <Field
                className={nameClassNames}
                type="text"
                name="name"
                placeholder="Your name"
                autoFocus
              />
              <ErrorMessage
                className={styles.error}
                name="name"
                component="span"
              />
            </label>

            <label className={styles.lable}>
              <span>Phone Number:</span>
              <Field
                className={phoneClassNames}
                type="tel"
                name="phone"
                placeholder="+380 00 000 00 00"
              />
              <ErrorMessage
                className={styles.error}
                name="phone"
                component="span"
              />
            </label>

            <label className={styles.lable}>
              <span>Email:</span>
              <Field
                type="email"
                name="email"
                placeholder="email@gmail.com"
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="span"
              />
            </label>

            <label className={styles.lable}>
              <span>Birthday:</span>
              <Field
               type="date" name="birthday" />
              <ErrorMessage
                className={styles.error}
                name="birthday"
                component="span"
              />
            </label>

            <button type="submit">Save</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
