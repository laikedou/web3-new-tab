import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import type { Multer } from "multer";
import middleware from "#/middleware/middleware";
const handler = nc<
  NextApiRequest & { file: Express.Multer.File },
  NextApiResponse
>();
handler.use(middleware);
handler.post(async (req, res) => {
  const storage = new ThirdwebStorage();
  console.log("req.body", req.body);
  console.log("req.files", req);
  // // Here we get the IPFS URI of where our metadata has been uploaded
  // const uri = await storage.upload(req.body);
  // // This will log a URL like ipfs://QmWgbcjKWCXhaLzMz4gNBxQpAHktQK6MkLvBkKXbsoWEEy/0
  // console.log(uri);
  // // Here we a URL with a gateway that we can look at in the browser
  // const data = await storage.downloadJSON(uri);
  // console.log(data);
  // res.status(200).json(data);
});
export default handler;
export const config = {
  api: {
    bodyParser: false,
  },
};
