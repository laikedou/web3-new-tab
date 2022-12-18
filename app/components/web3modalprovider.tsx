"use client";
import React, { PropsWithChildren } from "react";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { INFURA_API_KEY, WALLET_CONNECT_PROJECT_ID } from "../consts";

const { chains, provider } = configureChains(
  [goerli, mainnet, polygon, optimism, arbitrum],
  [infuraProvider({ apiKey: INFURA_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

type Props = {};

const Web3modalprovider = (props: PropsWithChildren<Props>) => {
  const { children } = props;
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default Web3modalprovider;
