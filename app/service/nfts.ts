import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nftsApi = createApi({
  reducerPath: "nftsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/mock" }),
  endpoints(builder) {
    return {
      getHotNfts: builder.query<ResponseData<NftsProps>, string>({
        query: () => `/nfts`,
      }),
    };
  },
});

export const { useGetHotNftsQuery } = nftsApi;
