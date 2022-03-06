import React from "react";
import "./TextField.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ErrorMessage, useField } from "formik";

export default function TextField({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      />
      <div className="error">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
}
