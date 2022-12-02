import { useGetHotNftsQuery } from "#/app/service/nfts";
import React, { PropsWithChildren, useEffect, useState } from "react";
import NFTCard from "../nft-card";
import SearchBar from "../search-bar";

type Props = {};

const HotNfts = (props: PropsWithChildren<Props>) => {
  const [activeSelect, setActiveSelect] = useState("Recently Added");
  const [nfts, setNfts] = useState<NftsProps[]>([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  const { data, error, isLoading } = useGetHotNftsQuery("");

  useEffect(() => {
    if (data) {
      setNfts(data?.data);
    }
  }, [data]);

  const onHandleSearch = (value: string) => {
    const filteredNfts = nfts.filter(({ name }: { name: string }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredNfts.length) {
      setNfts(filteredNfts);
    } else {
      setNfts(nftsCopy);
    }
  };
  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-row justify-between mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
          <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4">
            🔥 Hot NFTs
          </h1>
          <div className="flex-2 sm:w-full flex flex-row sm:flex-col">
            <SearchBar
              activeSelect={activeSelect}
              setActiveSelect={setActiveSelect}
              handleSearch={onHandleSearch}
              clearSearch={onClearSearch}
            />
          </div>
        </div>
        {isLoading ? (
          "loading"
        ) : (
          <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
            {nfts.map((nft) => (
              <NFTCard key={nft.i} nft={nft} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HotNfts;
