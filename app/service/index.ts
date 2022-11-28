import { post } from "../utils/request";

// 上传到ipfs服务器需要调用接口进行上传
export const UploadToIPFS = async (data: any) => {
  return await post("/upload", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
