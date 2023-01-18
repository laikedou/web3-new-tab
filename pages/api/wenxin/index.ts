import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import fetch, { Response } from "node-fetch";
const API_KEY = "niZEXiKB0jmNvcTt0GLgRjsSpRF6ZWwF";
const S_KEY = "IgkogPVMKDTh3rxETP0csg0HPDHGLpTk";
const AUTH_URL = `https://wenxin.baidu.com/moduleApi/portal/api/oauth/token`;
//后期会进行验证 比如说连接上阿里云cloud环境进行验证的功能
const handler = nc<NextApiRequest, NextApiResponse>();
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("get method req.query", req.query, typeof req.query);
  const { contents } = req.query;
  console.log("query method req.query", req.query);
  const response: Response = await fetch(AUTH_URL, {
    headers: { ContentType: `application/x-www-form-urlencoded` },
    method: "POST",
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: API_KEY,
      client_secret: S_KEY,
    }),
  });

  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);
  const result: any = await response.json();
  console.log("response.ok", result);
  if (result.code === 0) {
    //拿到token以后进行创建任务等操作
    const accessToken = result.data;
    //成功
    return res.send(result);
  }
  return res.send({
    code: 500,
    msg: "error",
    data: "未知错误",
  });
});
export default handler;
