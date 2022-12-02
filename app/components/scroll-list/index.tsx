import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import CreatorCard from "../creator-card";
import { useGetTopCreatorsQuery } from "#/app/service/creators";
import assets from "#/app/assets";

type Props = {};

const ScrollList = (props: PropsWithChildren<Props>) => {
  const { children } = props;
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const { data, error, isLoading } = useGetTopCreatorsQuery("");
  const [hideButtons, setHideButtons] = useState(false);
  const handleScroll = (direction: string = "left") => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left") {
      if (current) {
        current.scrollLeft -= scrollAmount;
      }
    } else {
      if (current) {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current && parent) {
      if (current?.scrollWidth >= parent?.offsetWidth) {
        setHideButtons(false);
      } else {
        setHideButtons(true);
      }
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);
    return () => {
      window.removeEventListener("resize", isScrollable);
    };
  });
  return (
    <>
      {!isLoading && !data?.data.length ? (
        <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
          The marketplace is empty.
        </h1>
      ) : isLoading ? (
        "loading"
      ) : (
        <>
          <div>
            <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
              ⭐ Top Creators
            </h1>
            <div
              className="relative flex-1 max-w-full flex mt-3"
              ref={parentRef}
            >
              <div
                className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
                ref={scrollRef}
              >
                {data?.data.map((creator, i) => (
                  <CreatorCard
                    key={creator.key}
                    currency={creator.currency}
                    rank={i + 1}
                    creatorImage={creator.creatorImage}
                    creatorName={creator.creatorName}
                    creatorEths={creator.creatorEths}
                  />
                ))}
                {!hideButtons && (
                  <>
                    <div
                      onClick={() => handleScroll("left")}
                      className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                    >
                      <Image
                        src={assets.left}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        alt="left_arrow"
                        className={
                          theme === "light"
                            ? "filter invert object-contain"
                            : "object-contain "
                        }
                      />
                    </div>
                    <div
                      onClick={() => handleScroll("right")}
                      className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                    >
                      <Image
                        src={assets.right}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        alt="right_arrow"
                        className={
                          theme === "light"
                            ? "filter invert object-contain"
                            : " object-contain"
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ScrollList;
