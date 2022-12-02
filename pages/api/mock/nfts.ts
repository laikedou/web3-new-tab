import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
//引入fakerjs 进行数据模拟 mockjs已经几乎很少更新了
import { faker } from "@faker-js/faker";
const handler = nc<
  NextApiRequest & { file: Express.Multer.File },
  NextApiResponse
>();
handler.get(async (req, res) => {
  const createNFTs = () => {
    return {
      i: faker.datatype.uuid(),
      price: faker.datatype.number(),
      image: faker.image.image(),
      name: faker.name.fullName(),
      owner: faker.name.fullName(),
      seller: faker.name.fullName(),
      currency: faker.finance.currencyCode(),
    };
  };
  const createNfts = (numUsers = 45) => {
    return Array.from({ length: numUsers }, createNFTs);
  };
  res.json({
    success: true,
    data: createNfts(),
  });
});
export default handler;
