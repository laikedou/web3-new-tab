"use client";
import React, { useCallback, useEffect, useState } from "react";
import { FaImage } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { create } from "ipfs-http-client";
import {
  INFURA_IPFS_PROJECT_ID,
  INFURA_IPFS_PROJECT_SECRET,
} from "#/app/consts";
import { Spinner, Box } from "@chakra-ui/react";
import Image from "next/image";
import ChakraCarousel from "#/app/components/carousel";

type Props = {
  onchange: any;
};
const Upload = (props: Props) => {
  const { onchange } = props;
  //设置上传标记
  const [uploading, setUploading] = useState(false);
  //files
  const [files, setFiles] = useState<
    {
      cid: string;
      url: string;
    }[]
  >([]);
  // Construct with token and endpoint

  const auth =
    "Basic " +
    Buffer.from(
      INFURA_IPFS_PROJECT_ID + ":" + INFURA_IPFS_PROJECT_SECRET
    ).toString("base64");
  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });
  const onDrop = useCallback(async (acceptedFiles: File[] = []) => {
    console.log("acceptedFiles", acceptedFiles);
    setUploading(true);
    try {
      const options = {
        wrapWithDirectory: true,
        progress: (prog: number) => console.log(`received: ${prog}`),
      };

      for (let i = 0; i < acceptedFiles.length; i++) {
        const file = acceptedFiles[i];
        const fileDetails = {
          path: file.name,
          content: file,
        };
        const added = await client.add(fileDetails, options);

        console.log(
          `https://photography.infura-ipfs.io/ipfs/${added.cid.toString()}/${encodeURIComponent(
            file.name
          )}`
        );
        setFiles((f) => {
          return [
            ...f,
            {
              cid: added.cid.toString(),
              url: `https://photography.infura-ipfs.io/ipfs/${added.cid.toString()}/${encodeURIComponent(
                file.name
              )}`,
            },
          ];
        });
      }

      setUploading(false);
    } catch (error) {
      console.log("error", error);
      setUploading(false);
    }
  }, []);
  useEffect(() => {
    onchange && onchange(files);
  }, [files]);
  const { getRootProps, getInputProps } = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop,
  });
  return (
    <section className="relative border cursor-pointer border-white border-dotted p-3 font-bold flex flex-col items-center justify-center">
      <h1 className="text-2xl">JPG, PNG, GIF, SVG, WEBM Max 100mb.</h1>
      <p {...getRootProps({ className: "dropzone" })}>
        <FaImage size={250} />
      </p>
      <h2> Drag and Drop File, or Browse media on your device.</h2>
      <input {...getInputProps()} />
      {uploading ? (
        <Box
          bgGradient={"radial(rgba(0,0,0,.1),rgba(0,0,0,.8))"}
          position={"absolute"}
          height="full"
          width={"full"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <Spinner size={"lg"}></Spinner>
        </Box>
      ) : null}
      {files.length > 0 ? (
        <ChakraCarousel gap={32}>
          {files.map((file) => (
            <Image
              key={file.cid}
              alt=""
              src={file.url}
              width={300}
              height={300}
              loading={"lazy"}
              style={{
                objectFit: "cover",
              }}
            />
          ))}
        </ChakraCarousel>
      ) : null}
    </section>
  );
};

export default Upload;
