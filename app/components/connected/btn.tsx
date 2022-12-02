"use client";
import Link from "next/link";
import React from "react";
import { useAccount, useEnsAvatar } from "wagmi";

type Props = {};

const ConnectedBtn = (props: Props) => {
  const { address } = useAccount();
  const { data, isError, isLoading } = useEnsAvatar({
    address,
    suspense: true,
  });

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return (
    <div className="relative flex flex-row items-center">
      <Link
        href={"/create"}
        className="gradient-btn-bg rounded-lg px-5 py-1 text-white"
      >
        Create
      </Link>
    </div>
  );
};

export default ConnectedBtn;
