/* eslint-disable react/jsx-props-no-spreading */
import { ErrorMessage, useField } from 'formik';
import React from 'react';

export default function Textarea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="form-control">
      <label htmlFor={field.name}>{label}</label>
      <textarea
        className={`invalid ${meta.touched && meta.error && 'jdk'}`}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}
