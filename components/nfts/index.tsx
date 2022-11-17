import React, { useState } from "react";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
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
  Text,
  useToast,
} from "@chakra-ui/react";

import * as Yup from "yup";
import MyInput from "../form/MyInput";
import MyProperties from "../form/MyProperties";
import MyUpload from "../form/MyUpload";

import { UploadToIPFS } from "#/service";
import { formateToFormData } from "#/utils";

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
      {
        name: "coolness",
        value: "very cool",
      },
      {
        name: "coolness",
        value: "very cool",
      },
      {
        name: "coolness",
        value: "very cool",
      },
      {
        name: "coolness",
        value: "very cool",
      },
      {
        name: "coolness",
        value: "very cool",
      },
    ],
  };
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
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
              onSubmit={async (values, actions) => {
                //转换成FormData格式然后进行上传操作
                const formdata = formateToFormData(values);
                setLoading(true);
                try {
                  const data = await UploadToIPFS(formdata);
                } catch (error: any) {
                  toast({
                    title: `${error.message}`,
                    status: "error",
                    isClosable: true,
                  });
                  setLoading(false);
                }
                setLoading(false);
                actions.setSubmitting(false);
              }}
            >
              {({ errors }) => (
                <Form noValidate={true} encType="multipart/form-data">
                  <Field
                    name="name"
                    placeholder="please input name"
                    component={MyInput}
                  />
                  <Field
                    name="description"
                    placeholder="please input description"
                    component={MyInput}
                  />
                  <Field
                    type="file"
                    name="image"
                    placeholder="please Select a image"
                    component={MyUpload}
                  />
                  <Field
                    name="properties"
                    placeholder="please select properties"
                    component={MyProperties}
                  />
                  <Flex justifyContent={"center"}>
                    <Button
                      width={120}
                      bg="purple.600"
                      type="submit"
                      size={"lg"}
                      isLoading={loading}
                    >
                      Mint NFT
                    </Button>
                  </Flex>
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
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Mint NFT
        </Button>
      </Flex>
    </>
  );
};

export default NFTS;
