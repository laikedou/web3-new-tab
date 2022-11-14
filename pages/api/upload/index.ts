import { NextApiRequest, NextApiResponse } from "next";
var axios = require("axios");
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(process.env.PINATA_IPFS_API_JWT);

  var config = {
    method: "get",
    url: "https://api.pinata.cloud/data/testAuthentication",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.PINATA_IPFS_API_JWT,
    },
  };

  console.log(process.env.PINATA_IPFS_API_JWT);
  //test
  try {
    const data = await axios(config);
  } catch (error) {
    console.log("error ", error);
  }
  //   console.log(data.data);
  res.status(200).json({ name: "John Doe" });
}
