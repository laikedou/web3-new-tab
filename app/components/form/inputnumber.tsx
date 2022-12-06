"use client";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldProps } from "formik";
import React from "react";
import { useNetwork } from "wagmi";

const MyInputNumber = ({ field, form, ...props }: FieldProps) => {
  const { errors, touched } = form;
  const error = errors[field.name] as string;
  const { chain } = useNetwork();
  return (
    <Box my={10}>
      <FormControl isInvalid={!!error}>
        <FormLabel>{field.name}</FormLabel>
        <Input {...field} {...props} step={1}></Input>
        
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default MyInputNumber;
