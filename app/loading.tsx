"use client";
import { Container, Spinner } from "@chakra-ui/react";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Container
      display={"flex"}
      flexDirection="row"
      justifyContent={"center"}
      alignItems="center"
      minH={800}
    >
      <Spinner
        thickness="8px"
        speed="0.65s"
        emptyColor="#14F195"
        color="#9945FF"
        size="xl"
      />
    </Container>
  );
}
