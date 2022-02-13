/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ErrorMessage, useField } from 'formik';
import React from 'react';

export default function Textfield({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-control">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`${meta.touched && meta.error && 'invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}
