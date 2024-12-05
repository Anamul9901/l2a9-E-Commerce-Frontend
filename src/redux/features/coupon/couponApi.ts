import { baseApi } from "../../api/baseApi";

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVendorCoupon: builder.query({
      query: () => {
        return {
          url: "/coupon",
          method: "GET",
        };
      },
      providesTags: ["coupon"],
    }),

   
    createCoupon: builder.mutation({
      query: (data) => {
        return {
          url: "/coupon",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["coupon"],
    }),

   
  }),
});

export const {
    useCreateCouponMutation,
    useGetVendorCouponQuery,
} = couponApi;
