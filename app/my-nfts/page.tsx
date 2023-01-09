"use client";
import Link from "next/link";
import { useEffect } from "react";
import { Button, Flex, VStack } from "@chakra-ui/react";
import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
export default function Page() {
  const getImg = async () => {
    Axios.post("/api/anything", {
      inputs: " i walk in the sky",
    });
  };
  return (
    <>
      <Button onClick={getImg}>get img</Button>
    </>
  );
}
