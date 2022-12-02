import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
//引入fakerjs 进行数据模拟 mockjs已经几乎很少更新了
import { faker } from "@faker-js/faker";
const handler = nc<
  NextApiRequest & { file: Express.Multer.File },
  NextApiResponse
>();
handler.get(async (req, res) => {
  const randomName = faker.name.fullName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  res.json({
    success: true,
    randomName,
    randomEmail,
  });
});
export default handler;
