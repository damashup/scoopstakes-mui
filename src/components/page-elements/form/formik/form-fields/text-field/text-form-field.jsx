import { getIn } from "formik";
import React from "react";
import {Text} from './styles';

const TextFormField = ({field, form, ...props}) => {

  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <Text
      fullWidth
      margin="normal"
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};

export default TextFormField;