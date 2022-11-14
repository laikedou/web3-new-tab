export const defaultCode = `import { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { readFileSync, unlinkSync, writeFileSync } from "fs";
import formidable, { File, Files } from "formidable";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //这里我们会对参数进行接收
  if (req.method === "POST") {
    //进行文件上传
    const form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files: Files) {
      res.status(200).json(files);
    });
  }
  //这里我们会使用thirdweb提供的sdk进行数据的上传 不用自己去购买相应的套餐
  // First, instantiate the SDK
  const storage = new ThirdwebStorage();
  // We define metadata for an NFT
  const metadata = {
    name: "NFT #1",
    description: "This is my first NFT",
    // Here we add a file into the image property of our metadata
    image: readFileSync(
      "/Users/suifeng/Downloads/DALL·E 2022-11-09 00.19.11.png"
    ),
    properties: [
      {
        name: "coolness",
        value: "very cool",
      },
    ],
  };
  // Here we get the IPFS URI of where our metadata has been uploaded
  const uri = await storage.upload(metadata);
  // This will log a URL like ipfs://QmWgbcjKWCXhaLzMz4gNBxQpAHktQK6MkLvBkKXbsoWEEy/0
  console.log(uri);
  // Here we a URL with a gateway that we can look at in the browser
  const data = await storage.downloadJSON(uri);
  console.log(data);
  res.status(200).json(data);
}
`;
