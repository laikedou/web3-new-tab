// 用于上传的公共组件支持 单文件以及批量上传后期还会支持解析xlsx文件进行上传
import React from "react";
import { FaImage } from "react-icons/fa";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import Upload from "../upload";
type Props = {};

const Create: React.FC<Props> = (props: Props) => {
  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }
  return (
    <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form className="flex flex-col gap-10">
          <Field name="image" validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.image && form.touched.image}>
                <FormLabel fontWeight={800} fontSize={25}>
                  Upload File
                </FormLabel>

                <FormErrorMessage>{form.errors.image}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="name" validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel fontWeight={800} fontSize={25}>
                  NFT Name
                </FormLabel>
                <Input {...field} placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="description" validate={validateName}>
            {({ field, form }: any) => (
              <FormControl
                isInvalid={form.errors.description && form.touched.description}
              >
                <FormLabel fontWeight={800} fontSize={25}>
                  Description
                </FormLabel>
                <Textarea
                  minHeight={200}
                  size={"lg"}
                  {...field}
                  placeholder="name"
                />
                <FormErrorMessage>{form.errors.description}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="price" validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.price && form.touched.price}>
                <FormLabel fontWeight={800} fontSize={25}>
                  Price
                </FormLabel>
                <NumberInput
                  type={"number"}
                  {...field}
                  placeholder="name"
                  defaultValue={15}
                  min={10}
                  max={20}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>{form.errors.price}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Flex justifyContent={"flex-end"}>
            <Button
              mt={4}
              isLoading={props.isSubmitting}
              type="submit"
              bgGradient={"linear(to-r,#16a34a,#4ade80)"}
            >
              Creat NFT
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default Create;
