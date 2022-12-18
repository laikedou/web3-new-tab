"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  MenuItem,
  Button,
  Text,
  useClipboard,
  Select,
} from "@chakra-ui/react";
import {
  useAccount,
  useBalance,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import truncateEthAddress from "#/app/utils";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineDisconnect } from "react-icons/ai";
import {
  FaEthereum,
  FaCopy,
  FaWifi,
  FaCopyright,
  FaCheck,
} from "react-icons/fa";
import Image from "next/image";
import assets from "#/app/assets";

type Props = {};

const ConnectedBtn = (props: Props) => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data } = useBalance({
    address,
  });
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const { onCopy, value, setValue, hasCopied } = useClipboard("");
  const [chainId, setChainId] = useState<number>();
  useEffect(() => {
    setChainId(chain?.id);
  }, [chain]);
  return (
    <div className="relative flex flex-row items-center">
      <Menu
        matchWidth={true}
        autoSelect={true}
        arrowPadding={0}
        closeOnSelect={false}
        isLazy={true}
      >
        <MenuButton
          padding={8}
          as={Button}
          leftIcon={<FaEthereum size={20} />}
          rightIcon={
            <div className="flex flex-row items-center">
              <Image
                src={assets.metamask}
                width={30}
                height={30}
                alt="metamask"
              />
              <FiChevronDown />
            </div>
          }
        >
          <p>
            {data?.formatted} {data?.symbol} {chain?.nativeCurrency?.symbol}
          </p>
          <p>
            {address && truncateEthAddress(address)}({chain?.name})
          </p>
        </MenuButton>
        <MenuList>
          <MenuGroup title="Personal Wallet" rowGap={5}>
            <MenuItem gap={2}>
              {hasCopied ? <FaCopy /> : <FaCheck color="green" />}
              <Text onClick={onCopy}>Copy wallet address</Text>
            </MenuItem>
            <MenuItem gap={2}>
              <FaWifi />
              <Select placeholder="Select Chain Network" defaultValue={chainId}>
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name}
                  </option>
                ))}
              </Select>
            </MenuItem>
            <MenuItem
              gap={2}
              onClick={() => {
                disconnect();
              }}
            >
              <AiOutlineDisconnect /> Disconnect
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="Mint NFTs" rowGap={5}>
            <MenuItem>
              <Link
                href={"/create"}
                className="gradient-btn-bg rounded-lg px-5 py-1 text-white"
              >
                Create
              </Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ConnectedBtn;
