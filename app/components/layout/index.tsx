import React, { PropsWithChildren } from "react";
import Footer from "../footer";
import Header from "../header";

import styles from "./styles.module.css";

type Props = {};

const Layout = (props: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <section className="pt-[80px]">{props.children}</section>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
