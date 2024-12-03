import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => {
        return {
          url: "/product",
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    getMyProduct: builder.query({
      query: () => {
        return {
          url: "/product/vendor/myproduct",
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/comment/${id}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/comment",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/comment/${data?.id}`,
          method: "Put",
          body: data?.data,
        };
      },
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/comment/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useAddProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetMyProductQuery
} = productApi;
