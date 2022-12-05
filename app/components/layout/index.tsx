"use client";
import React, { PropsWithChildren } from "react";
import Footer from "../footer";
import Header from "../header";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "#/app/consts/theme";
type Props = {};

const Layout = (props: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <motion.section
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="pt-[80px]"
      >
        {props.children}
      </motion.section>
      <Footer></Footer>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </div>
  );
};

export default Layout;
