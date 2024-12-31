import { baseApi } from "../../api/baseApi";

const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllnewsletter: builder.query({
      query: () => {
        return {
          url: `/newsletter`,
          method: "GET",
        };
      },
      providesTags: ["newsletter"],
    }),

    getSinglenewsletter: builder.query({
      query: (id) => {
        return {
          url: `/newsletter/${id}`,
          method: "GET",
        };
      },
      providesTags: ["newsletter"],
    }),

    createnewsletter: builder.mutation({
      query: (data) => {
        return {
          url: `/newsletter`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["newsletter"],
    }),

    updatenewsletter: builder.mutation({
      query: (data) => {
        console.log('data', data)
        return {
          url: `/newsletter/${data.id}`,
          method: "PATCH",
          body: data.data,
        };
      },
      invalidatesTags: ["newsletter"],
    }),

    deletenewsletter: builder.mutation({
      query: (id) => {
        return {
          url: `/newsletter/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["newsletter"],
    }),
  }),
});

export const {
  useGetAllnewsletterQuery,
  useGetSinglenewsletterQuery,
  useCreatenewsletterMutation,
  useUpdatenewsletterMutation,
  useDeletenewsletterMutation,
} = newsletterApi;
