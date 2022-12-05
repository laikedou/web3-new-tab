"use client";
import Link from "next/link";
import { useEffect } from "react";
import Create from "../components/create";

export default function Page() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="container">
        <Create />
      </div>
    </>
  );
}
