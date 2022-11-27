// middleware.ts 中间件用于处理上传
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
const middleware = nc<NextApiRequest, NextApiResponse>();
import multer from "multer";
import { myCustomStorage } from "./customstorage";
middleware.use(async (req, res, next) => {
  //这里我们会对参数进行接收
  if (req.method === "POST") {
    var storage = myCustomStorage({});
    const multerUpload = multer({ storage });
    const upload = multerUpload.single("image");
    upload(req as any, res as any, next);
  } else {
    //其它情况全部一路返回
    next();
  }
});

export default middleware;
