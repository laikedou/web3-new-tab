"use client";
import "#/styles/globals.css";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { ColorModeScript, extendTheme } from "@chakra-ui/react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { useRef } from "react";
import Header from "#/components/header";
import Footer from "#/components/footer";
import { AnalyticsWrapper } from "./components/analytics";
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

  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={"dark"} />
        <Box ref={rootRef}>
          <ChakraProvider theme={theme}>
            <Header></Header>
            {children}
            <Footer />
          </ChakraProvider>
        </Box>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
