import {
  Box,
  Button,
  Container,
  Flex,
  Link as Clink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navs } from "./const";

type Props = {};

const Header = (props: Props) => {
  return (
    <Container
      paddingY={10}
      maxW="1200px"
      display="flex"
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"}>
        <Image
          src={"/images/common/solanaLogoMark.png"}
          width={40}
          height={30}
          alt=""
        />
        <Text
          pl={2}
          fontSize={25}
          fontWeight="extrabold"
          textTransform={"uppercase"}
        >
          JOHN&apos;s LibS
        </Text>
      </Flex>
      <Flex flex={1} alignItems="center" gap={10} justifyContent="end">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/labs">Labs</Link>
        <Menu>
          <MenuButton>Navs</MenuButton>
          <MenuList>
            {navs.map((nav, index) => (
              <MenuItem key={nav.url}>
                <Clink href={nav.url} isExternal={true}>
                  {nav.name}
                </Clink>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Button bgGradient="linear(to-l, #9945FF, #14F195)">Connect</Button>
      </Flex>
    </Container>
  );
};
export default Header;
