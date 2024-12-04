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

    addAndUpdateCart: builder.mutation({
      query: (data) => {
        return {
          url: `/cart`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["cart"],
    }),

    reduceCartQty: builder.mutation({
      query: (data) => {
        return {
          url: `/cart/reduce-quantity`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetSingleCartQuery,
  useAddAndUpdateCartMutation,
  useReduceCartQtyMutation,
} = cartApi;
