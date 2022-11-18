import { Container, Flex, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
type Props = {};

const Footer = (props: Props) => {
  return (
    <Box bgGradient="linear(to-l, #9945FF, #14F195)">
      <Container
        paddingY={10}
        maxW="1200px"
        display={"flex"}
        flexDirection="row"
        justifyContent="space-between"
        gap={10}
      >
        <Flex direction={"column"} gap={10} maxW={200}>
          <Flex direction={"row"} alignItems="center" gap={3}>
            <Image
              src={"/images/common/solanaLogoMark.png"}
              width={40}
              height={30}
              alt="JOHN SMITH LIB"
            />
            <Text fontSize={16} fontWeight="extrabold">
              JOHN SMITH
            </Text>
          </Flex>
          <Text>Create beautiful code snippets with ease.</Text>
          <Text>© seriouscode GmbH All Rights Reserved.</Text>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={20} flex={1}>
          <GridItem>
            <Flex direction={"column"}>
              <Text>Product</Text>
              <Text>Pricing</Text>
              <Text>Editor</Text>
              <Text>Templates</Text>
              <Text>Features</Text>
              <Text>Embedding</Text>
              <Text>Resources</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex direction={"column"}>
              <Text>Product</Text>
              <Text>Pricing</Text>
              <Text>Editor</Text>
              <Text>Templates</Text>
              <Text>Features</Text>
              <Text>Embedding</Text>
              <Text>Resources</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex direction={"column"}>
              <Text>Product</Text>
              <Text>Pricing</Text>
              <Text>Editor</Text>
              <Text>Templates</Text>
              <Text>Features</Text>
              <Text>Embedding</Text>
              <Text>Resources</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex direction={"column"}>
              <Text>Product</Text>
              <Text>Pricing</Text>
              <Text>Editor</Text>
              <Text>Templates</Text>
              <Text>Features</Text>
              <Text>Embedding</Text>
              <Text>Resources</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
