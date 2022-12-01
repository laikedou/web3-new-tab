"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
type Props = {};
import Image from "next/image";
import assets from "#/app/assets";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
const Header = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTheme("dark");
    setMounted(true);
  }, []);

  return (
    <header className="dark:bg-nft-dark fixed w-full z-20  dark:border-nft-black-1 border-b border-nft-gray-1  shadow-md">
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
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
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
              <Link href={"/my-nfts"}>Listed NFTs</Link>
            </li>
            <li>
              <Link href={"/create"}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <button className="gradient-btn-bg rounded-lg px-5 py-1 text-white">
                    Create
                  </button>
                </motion.div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
