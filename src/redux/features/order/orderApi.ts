import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllorder: builder.query({
      query: () => {
        return {
          url: "/order",
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),

    getSingleorder: builder.query({
      query: (id) => {
        return {
          url: `/order/${id}`,
          method: "GET",
        };
      },
      providesTags: ["order"],
    }),

    createOrder: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: "/order",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["order"],
    }),

    updateorder: builder.mutation({
      query: (data) => {
        return {
          url: `/comment/${data?.id}`,
          method: "Put",
          body: data?.data,
        };
      },
      invalidatesTags: ["order"],
    }),

    deleteorder: builder.mutation({
      query: (id) => {
        return {
          url: `/comment/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,

  useGetAllorderQuery,
  useGetSingleorderQuery,
  useUpdateorderMutation,
  useDeleteorderMutation,
} = orderApi;
