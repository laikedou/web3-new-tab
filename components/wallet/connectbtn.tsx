import { Box, Button, Text, Flex, Heading, Spinner } from "@chakra-ui/react";
import {
  Web3Modal,
  Web3Button,
  useAccount,
  useBalance,
  useConnectModal,
  useFeeData,
} from "@web3modal/react";
import React, { useEffect } from "react";
import { interval } from "rxjs";

type Props = {};
const config = {
  projectId: "40a754d7ff107e055b2dde256d851d53",
  theme: "dark" as const,
  accentColor: "purple" as const,
  ethereum: {
    appName: "web3Modal",
  },
};
const ConnectBtn: React.FC<any> = (props: Props) => {
  const { account, isReady } = useAccount();
  const { open, isOpen, close } = useConnectModal();
  // Usage
  const { data, error, isLoading, refetch } = useBalance({
    addressOrName: account.address,
  });
  //gasfee info
  const {
    data: FeeData,
    error: FeeDataError,
    isLoading: FeeDataLoading,
    refetch: FeeDataRefetch,
  } = useFeeData({
    formatUnits: "gwei",
  });

  useEffect(() => {
    const inter = interval(1000).subscribe(() => {
      FeeDataRefetch();
    });
    return () => {
      inter.unsubscribe();
    };
  }, []);
  return (
    <>
      <Web3Modal config={config} />
      <Flex
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        padding={20}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
      >
        <Heading mb={4}>Try To Join Web3 world! click the button below</Heading>
        <Web3Button />
        {isReady ? (
          <>
            <Box>
              <Text fontSize="3xl">address: {account.address}</Text>
              <Text fontSize="3xl">status: {account.status}</Text>
              {!isLoading ? (
                <>
                  <Text fontSize="3xl">value:{data?.value.toString()}</Text>
                  <Text fontSize="3xl">decimals: {data?.decimals}</Text>
                </>
              ) : (
                <Spinner />
              )}

              <>
                <Text fontSize="3xl">
                  gasPrice:{FeeData?.formatted.gasPrice} gwei
                </Text>
                <Text fontSize="3xl">
                  maxFeePerGas: {FeeData?.formatted.maxFeePerGas} gwei
                </Text>
                <Text fontSize="3xl">
                  maxPriorityFeePerGas:{" "}
                  {FeeData?.formatted.maxPriorityFeePerGas} gwei
                </Text>
              </>
            </Box>
          </>
        ) : (
          <Spinner />
        )}
      </Flex>
    </>
  );
};

export default ConnectBtn;
