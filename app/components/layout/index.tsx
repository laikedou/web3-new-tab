
import React from "react";
import Footer from "../footer";
import Header from "../header";

import styles from "./styles.module.css";

type Props = {};

const Layout = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
