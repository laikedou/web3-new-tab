import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

type Props = {};

const ConnectBtn = (props: Props) => {
  const Connect = () => {
    open();
  };
  return (
    <div className="relative flex flex-row">
      <ConnectButton />
    </div>
  );
};

export default ConnectBtn;
