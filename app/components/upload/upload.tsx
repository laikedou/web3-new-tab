
import { useStorageUpload } from "@thirdweb-dev/react";
type Props = {};
import React, { useCallback } from "react";
import { FaImage } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
const Upload = (props: Props) => {
  const { mutateAsync: upload } = useStorageUpload();
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uris = await upload({ data: acceptedFiles });
      console.log(uris);
    },
    [upload]
  );
  const { getRootProps, getInputProps } = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop,
  });
  return (
    <section
      {...getRootProps({ className: "dropzone" })}
      className="border cursor-pointer border-white border-dotted p-3 font-bold flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl">JPG, PNG, GIF, SVG, WEBM Max 100mb.</h1>
      <p>
        <FaImage size={250} />
      </p>
      <h2> Drag and Drop File, or Browse media on your device.</h2>
      <input {...getInputProps()} />
    </section>
  );
};

export default Upload;
