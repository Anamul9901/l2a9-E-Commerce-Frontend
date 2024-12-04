import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleCart: builder.query({
      query: () => {
        return {
          url: `/cart`,
          method: "GET",
        };
      },
      providesTags: ["cart"],
    }),

    addcart: builder.mutation({
      query: (shopId) => {
        return {
          url: `/follow/${shopId}`,
          method: "POST",
        };
      },
      invalidatesTags: ["cart"],
    }),

    removecart: builder.mutation({
      query: (shopId) => {
        return {
          url: `/unfollow/${shopId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["cart"],
    }),

    checkMyFollo: builder.query({
      query: (shopId) => {
        return {
          url: `/check-my-follow/${shopId}`,
          method: "GET",
        };
      },
      providesTags: ["cart"],
    }),
  }),
});

export const {
  useGetSingleCartQuery,

  useAddcartMutation,
  useRemovecartMutation,
  useCheckMyFolloQuery,
} = cartApi;
