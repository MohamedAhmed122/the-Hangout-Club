import React from "react";

import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";

const FormSelect = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Select
        clearable
        value={field.value || null}
        onChange={(e,d) => helpers.setValue(d.value) }
        onBlur={()=> helpers.setTouched(true)}
        {...props}
      />
      {meta.error && meta.touched ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};
export default FormSelect;