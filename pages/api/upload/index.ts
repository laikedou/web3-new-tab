import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<
  NextApiRequest & { file: Express.Multer.File },
  NextApiResponse
>();
handler.post(async (req, res) => {
  // console.log("req.body", req.body);
  console.log("req.files", req.file);
});
export default handler;
export const config = {
  api: {
    bodyParser: false,
  },
};
