import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { CONTACT_VALIDATION_SCHEMA } from "../../../utils/validateYup";
import styles from "./ContactForm.module.sass";
import classNames from "classnames/bind";
import Input from "../Input/Input";

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

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          label="Name:"
          type="text"
          name="name"
          placeholder="Your name"
          autoFocus
          classes={classes}
        />
        <Input
          label="Phone Number:"
          type="tel"
          name="phone"
          placeholder="+380 00 000 00 00"
          classes={classes}
        />

        <Input
          label="Email:"
          type="email"
          name="email"
          placeholder="email@gmail.com"
          classes={classes}
        />

        <Input
          label="Birthday:"
          type="date"
          name="birthday"
          classes={classes}
        />

        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
