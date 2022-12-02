import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
//引入fakerjs 进行数据模拟 mockjs已经几乎很少更新了
import { faker } from "@faker-js/faker";
const handler = nc<
  NextApiRequest & { file: Express.Multer.File },
  NextApiResponse
>();
handler.get(async (req, res) => {
  const createCreator = () => {
    return {
      key: faker.datatype.uuid(),
      rank: faker.datatype.number(),
      creatorImage: faker.image.image(),
      creatorName: faker.name.fullName(),
      creatorEths: faker.datatype.float(),
      currency: faker.finance.currencyCode(),
      owner: faker.name.fullName(),
      seller: faker.name.fullName(),
    };
  };
  const createCreators = (numUsers = 15) => {
    return Array.from({ length: numUsers }, createCreator);
  };
  res.json({
    success: true,
    data: createCreators(),
  });
});
export default handler;
