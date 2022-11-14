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
  useDisclosure,
  Heading,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Text,
} from "@chakra-ui/react";

import * as Yup from "yup";
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
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay backdropFilter="auto" backdropBlur="lg" />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
              textAlign={"center"}
            >
              Mint NFT
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={(values, actions) => {
                console.log({ values, actions });
                actions.setSubmitting(false);
              }}
            >
              {({ errors }) => (
                <>
                  <FormControl
                    isInvalid={!!errors?.name}
                    // errortext={errors?.name}
                    p="4"
                    isRequired
                  >
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" placeholder="Email" />
                    <FormErrorMessage>{errors?.name}</FormErrorMessage>
                    <FormHelperText>
                      We are obviously giving this straight to Facebook.
                    </FormHelperText>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors?.description}
                    // errortext={errors?.description}
                    px="4"
                    pb="4"
                    isRequired
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <FormErrorMessage>{errors?.description}</FormErrorMessage>
                  </FormControl>
                  <Button
                    type="submit"
                    p="4"
                    mx="4"
                    mt="6"
                    w="90%"
                    colorScheme="blue"
                    variant="solid"
                    disabled={!!errors.name || !!errors.description}
                  >
                    Login
                  </Button>
                </>
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
