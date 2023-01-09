import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import fetch, { Response } from "node-fetch";

const API_TOKEN = "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";
const model = "Linaqruf/anything-v3.0";
const modelsUrl = `https://api-inference.huggingface.co/models/${model}`;
//后期会进行验证 比如说连接上阿里云cloud环境进行验证的功能
const handler = nc<NextApiRequest, NextApiResponse>();
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(
    "post method req.body",
    req.body,
    typeof req.body,
    JSON.stringify(req.body)
  );
  const response: Response = await fetch(modelsUrl, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
    method: "POST",
    body: JSON.stringify(req.body),
  });

  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  res.setHeader("Content-Type", "image/jpg");
  res.send(buffer);
});
export default handler;
