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
          url: `/product/${id}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    getShopProduct: builder.query({
      query: (shopId) => {
        return {
          url: `/product//shop-product/${shopId}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/product/${data?.id}`,
          method: "PATCH",
          body: data?.data,
        };
      },
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),

    softDeleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/product/soft/${id}`,
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
  useGetMyProductQuery,
  useSoftDeleteProductMutation,
  useGetShopProductQuery,
} = productApi;
