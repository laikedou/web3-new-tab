import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { FieldProps } from "formik";
import dynamic from "next/dynamic";
import React from "react";

const Upload = dynamic(() => import("../upload/upload"), {
  suspense: true,
  ssr: false,
});

const MyUpload = ({ field, form, ...props }: FieldProps) => {
  const { errors, touched, setFieldValue } = form;
  const error = errors[field.name] as string;
  const { value, ...rest } = field;
  const onchange = (files: StorageFile[]) => {
    try {
      setFieldValue(field.name, files);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box my={10}>
      <FormControl isInvalid={!!error}>
        <FormLabel>{field.name}</FormLabel>
        <Upload onchange={onchange} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default MyUpload;
