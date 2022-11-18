"use client";
import { Button, Container, Flex, Text } from "@chakra-ui/react";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {}, []);
  //进行post blog
  const PostBlog = async () => {};
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
          Try To POST A Blog And So On ...
        </Text>
        <Flex justifyContent={"center"} py={10}>
          <Button
            onClick={PostBlog}
            bgGradient="linear(to-l, #9945FF, #14F195)"
          >
            Post A Blog
          </Button>
        </Flex>
      </Container>
    </>
  );
}
