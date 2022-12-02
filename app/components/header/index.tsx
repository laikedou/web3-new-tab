"use client";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./styles.module.css";
type Props = {};
import Image from "next/image";
import assets from "#/app/assets";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAccount } from "wagmi";
import ConnectedBtn from "../connected/btn";
import ConnectBtn from "../connected/connect";
import { useColorMode } from "@chakra-ui/react";
const Header = (props: Props) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const { isConnected, address } = useAccount();
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <header className="dark:bg-nft-dark fixed  bg-white w-full z-20  dark:border-nft-black-1 border-b border-nft-gray-1  shadow-md">
      <div className="w-[1280px] mx-auto py-4 relative flex flex-row">
        <div className="flex flex-row items-center gap-2">
          <motion.div
            whileHover={{ rotate: 90 }}
            whileTap={{
              scale: 1,
              rotate: -90,
            }}
          >
            <Image src={assets.logo02} width={50} height={50} alt="logo" />
          </motion.div>
          <span className="font-semibold text-2xl">Polyplace</span>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end">
          <div className="flex flex-initial flex-row ">
            <div className="flex items-center mr-4">
              <input
                type="checkbox"
                className={styles.checkbox}
                id="checkbox"
                onChange={toggleColorMode}
              />

              <label htmlFor="checkbox" className={styles.label}>
                <i className="fas fa-moon text-xs text-pink-100" />
                <i className="fas fa-sun text-xs text-yellow-100" />
                <div className={styles.ball} />
              </label>
            </div>

            <div className="md:hidden flex"></div>
          </div>
          <ul className={styles.navs}>
            <li className={styles.cur}>
              <Link href={"/"}>Explore NFTs</Link>
            </li>
            <li>
              <Link href={"/listed-nfts"}>Listed NFTs</Link>
            </li>
            <li>
              <Link href={"/my-nfts"}>My NFTs</Link>
            </li>
            <li>
              {domLoaded && (
                <Suspense>
                  {isConnected ? <ConnectedBtn /> : <ConnectBtn />}
                </Suspense>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
