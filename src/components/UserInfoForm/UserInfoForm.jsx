import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(20).required(),
});

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
          <form onSubmit={formikProps.handleSubmit} onReset={formikProps.handleReset}>
            <input
              type="text"
              placeholder="Your name"
              autoFocus
              name="firstName"
              value={formikProps.values.firstName}
              onChange={formikProps.handleChange}
            />
            {formikProps.errors.firstName && (
              <div> {formikProps.errors.firstName}</div>
            )}
            <button type="submit">Save</button>
            <button type="reset" disabled={!formikProps.dirty}>Reset</button>
          </form>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
