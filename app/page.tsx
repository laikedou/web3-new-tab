"use client";
import Link from "next/link";
import { useEffect } from "react";
import HotNfts from "./components/hot-nfts";
import ScrollList from "./components/scroll-list";
import Slogan from "./components/slogan";

export default function Page() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="container">
        <Slogan></Slogan>
      </div>
      <div className="container">
        <ScrollList></ScrollList>
      </div>
      <div className="container">
        <HotNfts></HotNfts>
      </div>
    </>
  );
}
