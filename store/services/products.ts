// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
