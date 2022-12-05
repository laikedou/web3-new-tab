"use client";
import { AnalyticsWrapper } from "./components/analytics";
import Layout from "#/app/components/layout";
import ReduxProvider from "./components/reduxprovider";
import { Lexend } from "@next/font/google";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/globals.css";
import Web3modalprovider from "./components/web3modalprovider";
import theme from "./consts/theme";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title data-rh="true">polyplace</title>
      <meta
        data-rh="true"
        name="viewport"
        content="width=device-width,initial-scale=1"
      ></meta>
      <body>
        <ReduxProvider>
          <ChakraProvider theme={theme}>
            <Web3modalprovider>
              <Layout>{children}</Layout>
            </Web3modalprovider>
          </ChakraProvider>
        </ReduxProvider>
        <AnalyticsWrapper />
        <Script
          src="https://kit.fontawesome.com/77a74156e4.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
