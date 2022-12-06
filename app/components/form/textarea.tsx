import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { FieldProps } from "formik";
import React from "react";

const MyTextArea = ({ field, form, ...props }: FieldProps) => {
  const { errors, touched } = form;
  const error = errors[field.name] as string;
  return (
    <Box my={10}>
      <FormControl isInvalid={!!error}>
        <FormLabel>{field.name}</FormLabel>
        <Textarea {...field} {...props} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default MyTextArea;
