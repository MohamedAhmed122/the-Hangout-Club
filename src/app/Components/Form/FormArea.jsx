import React from "react";
import { FormField, Label } from "semantic-ui-react";
import { useField } from "formik";

const FormArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error} >
      <label>{label}</label>
      <textarea {...props} {...field} />
      {meta.touched && meta.error ? (
        <Label color="red" basic>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};
export default FormArea;