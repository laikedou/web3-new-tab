"use client";
import { Container, Text } from "@chakra-ui/react";
import ConnectButton from "../components/wallet/connectbtn";
import { useEffect } from "react";
import Clock from "../components/clock";
//最好将样式抽离出来，后面会更好操作
import { container } from "./styles";
import NetWork from "#/components/wallet/network";
import NFTS from "#/components/nfts";
import Editor from "#/components/editor";

export default function Page() {
  useEffect(() => {}, []);
  return (
    <>
      <Container paddingY={10} maxW="1200px">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign={"center"}
        >
          Welcome to Web3&apos;s World!
        </Text>
        <Clock />
        <ConnectButton />
        <NetWork />
        {/* NFTS */}
        <NFTS />
        {/* Editor */}
        <Editor />
      </Container>
    </>
  );
}
