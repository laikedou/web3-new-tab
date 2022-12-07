"use client";
import React, { PropsWithChildren } from "react";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { WALLET_CONNECT_PROJECT_ID } from "../consts";

const chains = [chain.mainnet, chain.polygon,chain.hardhat];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({
    projectId: WALLET_CONNECT_PROJECT_ID,
  }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
type Props = {};

const Web3modalprovider = (props: PropsWithChildren<Props>) => {
  const { children } = props;
  return (
    <>
      <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>
      <Web3Modal
        projectId={WALLET_CONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
      />
    </>
  );
};

export default Web3modalprovider;
