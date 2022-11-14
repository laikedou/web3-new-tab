import { Box, Button, Text, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useNetwork } from "@web3modal/react";
import { toPairs } from "lodash";
import React, { useEffect } from "react";
import { interval } from "rxjs";

type Props = {};

const NetWork: React.FC<any> = (props: Props) => {
  // Usage
  const { network, isReady } = useNetwork();

  useEffect(() => {}, []);

  return (
    <>
      <Flex
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        padding={20}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        marginTop={10}
      >
        <Heading mb={4}>
          Now try to change the chain network! click the button below
        </Heading>

        {isReady ? (
          <>
            <Box>
              <Text
                bgGradient="linear(to-l,  #ffffff,#1928CA)"
                bgClip="text"
                fontSize="4xl"
              >
                cureent chain network:
              </Text>
              <Text fontSize="3xl">chainname: {network?.chain?.name}</Text>
              {toPairs(network?.chain?.nativeCurrency).map((item, key) => (
                <Text fontSize="3xl" key={key}>
                  {key}: {item}
                </Text>
              ))}

              <Text fontSize="3xl">chainname: {network?.chain?.name}</Text>
              <Text fontSize="3xl">status: {network?.chains.join("-")}</Text>
            </Box>
          </>
        ) : (
          <Spinner />
        )}
      </Flex>
    </>
  );
};

export default NetWork;
