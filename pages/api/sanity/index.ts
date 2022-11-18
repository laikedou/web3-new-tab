import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import sanityClient from "@sanity/client";

const config = {
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: true,
  apiVersion: "2021-03-25",
};
const client = sanityClient(config);
const handler = nc<
  NextApiRequest & { file: Express.Multer.File },
  NextApiResponse
>();

handler.get(async (req, res) => {
  //这里进行查询看看
  client.fetch("*[_type == 'post']").then((bikes) => {
    console.log("Bikes with more than one seat:");
    bikes.forEach((bike: any) => {
      console.log(bike, `${bike.name} (${bike.seats} seats)`);
    });
  });
  res.status(200).json("data");
});
export default handler;
