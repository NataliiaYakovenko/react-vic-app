import { Field } from "formik";
import React from "react";
import classNames from "classnames";


function Input({ name, label,classes,...restProps }) {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });
        return (
          <label>
            <span>{label}</span>
            <input className={inputClassNames} {...restProps} {...field} />
            {meta.error&& meta.touched&& <span className={classes.error}>{meta.error}</span>}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
