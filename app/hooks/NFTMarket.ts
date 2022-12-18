import {
  useContract,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  usePrepareSendTransaction,
  useSendTransaction,
  useSigner,
} from "wagmi";
import { MarketAddress, MarketAddressABI } from "../consts";

export default function useNftMarket() {
  //首先要获取到siner
  const { data: signer } = useSigner();

  const { config } = usePrepareContractWrite({
    signer,
    address: MarketAddress,
    abi: MarketAddressABI,
    functionName: "fetchMyNFTs",
  });
  const {
    data,
    isLoading,
    isSuccess,
    write: CreateNft,
  } = useContractWrite({
    ...config,
    request: config.request,
  });

  //   const { config: transactionConf } = usePrepareSendTransaction({
  //     request: { to: "moxey.eth", value: listingPrice },
  //   });
  //   const { data, isLoading, isSuccess, sendTransaction } =
  //     useSendTransaction(transactionConf);

  return {
    CreateNft,
  };
}
