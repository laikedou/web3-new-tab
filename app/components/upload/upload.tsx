type Props = {};
import React, { useCallback, useState } from "react";
import { FaImage } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { Web3Storage, Web3File, Status } from "web3.storage";
import { WEB_STORAGE_API_TOKEN } from "#/app/consts";
import { Spinner, Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import Image from "next/image";
import { makeGatewayURL } from "#/app/utils";
import ChakraCarousel from "#/app/components/carousel";
type StorageFile = {
  cid: string;
  metadataGatewayURL: string;
  imageGatewayURL: string;
  imageURI: string;
  metadataURI: string;
};
const Upload = (props: Props) => {
  //设置上传标记
  const [uploading, setUploading] = useState(false);
  //files
  const [files, setFiles] = useState<StorageFile[]>([]);
  // Construct with token and endpoint
  const client = new Web3Storage({ token: WEB_STORAGE_API_TOKEN });
  const onDrop = useCallback(async (acceptedFiles: File[] = []) => {
    console.log("acceptedFiles", acceptedFiles);
    setUploading(true);
    try {
      // Pack files into a CAR and send to web3.storage
      const rootCid = await client.put(acceptedFiles, { maxRetries: 3 }); // Promise<CIDString>
      console.log("rootCid...", rootCid);

      // Get info on the Filecoin deals that the CID is stored in
      const info: Status = (await client.status(rootCid)) || {
        cid: "",
        created: "",
        dagSize: 0,
        deals: [],
        pins: [],
      }; // Promise<Status | undefined>
      console.log(`${info.cid} ${info.dagSize} ${info.created}`);
      const storages = [];
      for (const file of acceptedFiles) {
        const metadataGatewayURL = makeGatewayURL(rootCid, "metadata.json");
        const imageGatewayURL = makeGatewayURL(rootCid, file.name);
        const imageURI = `ipfs://${rootCid}/${file.name}`;
        const metadataURI = `ipfs://${rootCid}/metadata.json`;
        storages.push({
          cid: rootCid,
          metadataGatewayURL,
          imageGatewayURL,
          imageURI,
          metadataURI,
        });
      }
      setFiles(storages);
      setUploading(false);
    } catch (error) {
      console.log("error", error);
      setUploading(false);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop,
  });
  return (
    <section className="relative border cursor-pointer border-white border-dotted p-3 font-bold flex flex-col items-center justify-center">
      <h1 className="text-2xl">JPG, PNG, GIF, SVG, WEBM Max 100mb.</h1>
      <p>
        <FaImage size={250} {...getRootProps({ className: "dropzone" })} />
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
      ) : (
        <ChakraCarousel gap={32}>
          {files.map((file) => (
            <Image
              key={file.cid}
              alt=""
              src={file.imageGatewayURL}
              width={300}
              height={300}
            />
          ))}
        </ChakraCarousel>
      )}
    </section>
  );
};

export default Upload;
