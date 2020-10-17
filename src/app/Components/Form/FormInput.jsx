import React from "react";

import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.error && meta.touched ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};
export default FormInput;