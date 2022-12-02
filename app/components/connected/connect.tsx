import { useWeb3Modal } from "@web3modal/react";
import React from "react";
import { useAccount } from "wagmi";

type Props = {};

const ConnectBtn = (props: Props) => {
  const { isOpen, open, close } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const Connect = () => {
    open();
  };
  return (
    <div className="relative flex flex-row">
      <button
        onClick={Connect}
        className="gradient-btn-bg rounded-lg px-5 py-1 text-white"
      >
        Connect
      </button>
    </div>
  );
};

export default ConnectBtn;
