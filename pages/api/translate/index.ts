import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import fetch, { Response } from "node-fetch";

import { TranslationServiceClient } from "@google-cloud/translate";

//后期会进行验证 比如说连接上阿里云cloud环境进行验证的功能
const handler = nc<NextApiRequest, NextApiResponse>();
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("get method req.query", req.query, typeof req.query);
  const { contents } = req.query;
  // Creates a client
  const translate = new TranslationServiceClient();
  const translateRes = await translate.translateText({
    contents: [contents as string],
    sourceLanguageCode: "zh",
    targetLanguageCode: "en",
  });
  console.log("Translations:", translateRes);
  translateRes.forEach((translation, i) => {
    console.log(`${translation} `);
  });

  res.send(translateRes);
});
export default handler;
