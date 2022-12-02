import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type NFTCardProps = {
  nft: {
    image: string;
    i: string;
    name: string;
    price: number;
    owner: string;
    seller: string;
    currency: string;
  };
  onProfilePage?: any;
};

const NFTCard = ({ nft, onProfilePage }: NFTCardProps) => {
  return (
    <Link href={{ pathname: "/nft-details", query: nft }}>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md hover:shadow-lg duration-500"
      >
        <div className="relative w-full h-52 sm:h-36 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
          <Image
            className=" flex  justify-center items-center hover:scale-110 transition-all duration-500"
            src={nft?.image}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt={`nft${nft?.i}`}
          />
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-xl">
            {nft && nft.name.length > 14 ? nft?.name : nft?.name}
          </p>
          <div className="flex flex-row justify-between mt-1 minlg:mt-3 xs:flex-col xs:items-start xs:mt-3">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">
              {nft && nft.price > 100000 ? nft.price : nft?.price}{" "}
              <span className="normal">{nft?.currency}</span>
            </p>
            <p className="font-poppins dark:text-white text-nft-black-1 text-xs minlg:text-lg">
              {onProfilePage ? nft?.owner : nft?.seller}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default NFTCard;
