"use client";
import "#/styles/globals.css";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import {
  AspectRatio,
  ColorModeScript,
  extendTheme,
  Portal,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChakraProvider, Image, Box } from "@chakra-ui/react";
import Script from "next/script";
import { useRef, useState } from "react";

const colors = {
  // brand: {
  //   900: "#1a365d",
  //   800: "#153e75",
  //   700: "#2a69ac",
  // },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootRef = useRef(null);
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={"dark"} />
        <Box ref={rootRef}>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </Box>
      </body>
    </html>
  );
}
