//基于Axios的封装
import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "/api",
  timeout: 30000,
};

const client: AxiosInstance = Axios.create(config);
client.interceptors.response.use((res) => {
  return res.data;
});

client.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    return req;
  },
  (error: any) => {
    if (error.response.status === 408 || error.code === "ECONNABORTED") {
      console.log(`A timeout happend on url ${error.config.url}`);
    }
    return Promise.reject(error);
  }
);

export const get = async (url: string, config: AxiosRequestConfig) => {
  return await client.get(url, config);
};

export const post = async (
  url: string,
  data: any,
  config: AxiosRequestConfig
) => {
  return await client.post(url, data, config);
};

export const put = async (
  url: string,
  data: any,
  config: AxiosRequestConfig
) => {
  return await client.put(url, data, config);
};
