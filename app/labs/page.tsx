"use client";
import { Container, Text } from "@chakra-ui/react";
import { useEffect } from "react";

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
