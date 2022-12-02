import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const creatorsApi = createApi({
  reducerPath: "creatorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/mock" }),
  endpoints(builder) {
    return {
      getTopCreators: builder.query<ResponseData<CreatorCardProps>, string>({
        query: () => `/creators`,
      }),
    };
  },
});

export const { useGetTopCreatorsQuery } = creatorsApi;
