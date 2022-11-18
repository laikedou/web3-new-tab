import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FieldProps } from "formik";
import React from "react";

type Properties = {
  name: string;
  value: string;
};
const MyProperties = ({ field, form, ...props }: FieldProps) => {
  const { value } = field;
  //console.log(error);
  return (
    <Box my={10}>
      <FormControl>
        <FormLabel>{field.name}</FormLabel>
        <Input {...field} {...props} type="hidden" />
        {/* {error ? <FormErrorMessage>{error}</FormErrorMessage> : null} */}

        <Grid templateColumns="repeat(5, 1fr)" gap={10}>
          {value.map((v: Properties, key: string) => (
            <GridItem
              textAlign={"center"}
              bgGradient="linear(to-l, #9945FF, #14F195)"
              key={key}
            >
              <Text fontSize="sm">{v.name}</Text>
              <Text fontSize="xl">{v.value}</Text>
            </GridItem>
          ))}
        </Grid>
      </FormControl>
    </Box>
  );
};

export default MyProperties;
