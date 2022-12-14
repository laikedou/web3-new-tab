"use client";
// 用于上传的公共组件支持 单文件以及批量上传后期还会支持解析xlsx文件进行上传
import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { Button, Flex, VStack } from "@chakra-ui/react";
import * as Yup from "yup";
import MyInput from "../form/Input";
import MyUpload from "../form/upload";
import MyInputNumber from "../form/inputnumber";
import MyTextArea from "../form/textarea";
import useNftMarket from "#/app/hooks/NFTMarket";
import { ethers } from "ethers";
import { useContract, useContractRead, useProvider, useSigner } from "wagmi";
import { MarketAddress, MarketAddressABI } from "#/app/consts";
type Props = {};

const Create: React.FC<Props> = (props: Props) => {
  const SignupSchema = Yup.object().shape({
    image: Yup.array().required("Required"),
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(20, "Too Short")
      .max(200, "Too Long")
      .required("Required"),
    price: Yup.number().required("Required"),
  });
  const provider = useProvider();
  const { data: signer } = useSigner();

  const contract = useContract({
    address: MarketAddress,
    abi: MarketAddressABI,
    signerOrProvider: signer,
  });

  const getNfts = async () => {
    const data = await contract?.fetchMyNFTs();
    console.log("nfts.....", data);
  };
  const createNft = async () => {
    const price = ethers.utils.parseUnits("1", "ether");
    const listingPrice = await contract?.getListingPrice();
    const data = await contract?.createToken("htts://www.baidu.com", price, {
      value: listingPrice.toString(),
    });
  };

  //use nft contract hooks
  const { CreateNft } = useNftMarket();

  return (
    <>
      <Button onClick={getNfts}>GetMyNfts</Button>

      <VStack>
        <Button onClick={createNft}>Create Nft</Button>
      </VStack>
      <Formik
        initialValues={{ image: "", name: "", description: "", price: 0 }}
        onSubmit={(values, actions) => {
          //可以调用合约进行Mint 操作
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form noValidate={true}>
            <Field
              type="file"
              name="image"
              placeholder="please Select a image"
              component={MyUpload}
            />
            <Field
              name="name"
              placeholder="please input name"
              component={MyInput}
            />
            <Field
              name="description"
              placeholder="please input description"
              component={MyTextArea}
            />
            <Field
              name="price"
              placeholder="please input price"
              component={MyInputNumber}
            />
            <Flex justifyContent={"flex-end"}>
              <Button
                mt={4}
                isLoading={isSubmitting}
                type="submit"
                bgGradient={"linear(to-r,#16a34a,#4ade80)"}
              >
                Creat NFT
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Create;
