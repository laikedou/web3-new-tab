"use client";
import React, { PropsWithChildren } from "react";
import Footer from "../footer";
import Header from "../header";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

import { useAppSelector } from "#/app/hooks";
type Props = {};

const Layout = (props: PropsWithChildren) => {
  const theme = useAppSelector((state) => state.theme.theme);
  
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
      
    </div>
  );
};

export default Layout;
