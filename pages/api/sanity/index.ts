import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import sanityClient from "@sanity/client";

const config = {
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  apiVersion: "2021-03-25",
};
const client = sanityClient(config);
const handler = nc<
  NextApiRequest & { file: Express.Multer.File },
  NextApiResponse
>();

handler.get(async (req, res) => {
  //这里进行调用
  await client.create({
    username: "1",
    _type: "string",
  });
  res.status(200).json("data");
});
export default handler;
