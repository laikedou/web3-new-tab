import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldProps } from "formik";
import React, { ChangeEvent } from "react";

const MyUpload = ({ field, form, ...props }: FieldProps) => {
  const { errors, touched, setFieldValue } = form;
  const error = errors[field.name] as string;
  const { value, ...rest } = field;
  //console.log(error);
  const onchange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file);
      try {
        setFieldValue(field.name, file);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Box my={10}>
      <FormControl>
        <FormLabel>{field.name}</FormLabel>
        <Input {...rest} {...props} onChange={onchange} />
      </FormControl>
    </Box>
  );
};

export default MyUpload;
