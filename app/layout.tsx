"use client";
import "#/styles/globals.css";
import { AspectRatio, extendTheme, Portal } from "@chakra-ui/react";
import { ChakraProvider, Image, Box } from "@chakra-ui/react";
import Script from "next/script";
import { useRef } from "react";
const colors = {
  // brand: {
  //   900: "#1a365d",
  //   800: "#153e75",
  //   700: "#2a69ac",
  // },
};

const theme = extendTheme({ colors });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootRef = useRef(null);
  return (
    <html lang="en">
      <body>
        <Portal containerRef={rootRef}>
          {/* <AspectRatio maxW="full" ratio={4 / 3}>
            <Image
              src="https://www4.bing.com//th?id=OHR.YiPeng_ZH-CN0652265903_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
              alt="naruto"
              objectFit="cover"
              blur={"sm"}
            />
          </AspectRatio> */}
        </Portal>
        <Box ref={rootRef}>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </Box>
      </body>
    </html>
  );
}
