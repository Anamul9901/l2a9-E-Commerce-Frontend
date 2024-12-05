import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (data) => {
        return {
          url: `/product?limit=${data?.limit}&page=${data?.page}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    recentViewProducts: builder.query({
      query: (userId) => {
        return {
          url: `/recent-product-view/${userId}`,
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
      query: (data) => {
        return {
          url: `/product/${data?.productId}?userId=${data?.userId}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    getShopProduct: builder.query({
      query: (shopId) => {
        return {
          url: `/product/shop-product/${shopId}`,
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
  useRecentViewProductsQuery,
} = productApi;
