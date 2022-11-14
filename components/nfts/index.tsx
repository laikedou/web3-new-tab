import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useDisclosure,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface MyFormValues {
  firstName: string;
}
type Props = {};

const NFTS = (props: Props) => {
  //初始化数据
  const initialValues = {
    name: "NFT #1",
    description: "This is my first NFT",
    // Here we add a file into the image property of our metadata
    image: null,
    properties: [
      {
        name: "coolness",
        value: "very cool",
      },
    ],
  };
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }}
            >
              {(props) => (
                <Form>
                  <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>First name</FormLabel>
                        <Input {...field} placeholder="name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        padding={20}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        my={10}
      >
        <Heading mb={4}>Try To Mint A Nft! click the button below</Heading>
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          onClick={() => {
            onOpen();
          }}
        >
          ddd
        </IconButton>
      </Flex>
    </>
  );
};

export default NFTS;
