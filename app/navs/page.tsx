"use client";
import { Container, Text } from "@chakra-ui/react";
import ConnectButton from "#/components/wallet/connectbtn";
import { useEffect } from "react";
import Clock from "#/components/clock";
//最好将样式抽离出来，后面会更好操作
import NetWork from "#/components/wallet/network";
import NFTS from "#/components/nfts";

export default function Page() {
  useEffect(() => {}, []);
  return (
    <>
      <Container paddingY={10} maxW="1200px">
        <Text
          bgGradient="linear(to-l, #9945FF, #14F195)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign={"center"}
        >
          Welcome to Web3&apos;s World!
        </Text>
        
        
      </Container>
    </>
  );
}
