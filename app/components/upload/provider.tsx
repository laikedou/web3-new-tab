import React, { PropsWithChildren } from "react";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
type Props = {
  children: any;
};

const ThirdWebProvider: React.FC<Props> = (props: Props) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      {props.children}
    </ThirdwebProvider>
  );
};

export default ThirdWebProvider;
