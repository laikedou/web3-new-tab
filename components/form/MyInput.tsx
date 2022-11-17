import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldProps } from "formik";
import React from "react";

const MyInput = ({ field, form, ...props }: FieldProps) => {
  const { errors, touched } = form;
  const error = errors[field.name] as string;
  //console.log(error);
  return (
    <Box my={10}>
      <FormControl>
        <FormLabel>{field.name}</FormLabel>
        <Input {...field} {...props} />
        {/* {error ? <FormErrorMessage>{error}</FormErrorMessage> : null} */}
      </FormControl>
    </Box>
  );
};

export default MyInput;
