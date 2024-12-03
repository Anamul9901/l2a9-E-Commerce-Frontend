import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAlluser: builder.query({
      query: () => {
        return {
          url: "/user",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    getMyData: builder.query({
      query: (id) => {
        return {
          url: `/user/me`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    adduser: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: "/user",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    updateuser: builder.mutation({
      query: (data) => {
        return {
          url: `/comment/${data?.id}`,
          method: "Put",
          body: data?.data,
        };
      },
      invalidatesTags: ["user"],
    }),

    deleteuser: builder.mutation({
      query: (id) => {
        return {
          url: `/comment/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAlluserQuery,
  useAdduserMutation,
  useGetMyDataQuery,
  useUpdateuserMutation,
  useDeleteuserMutation,
} = userApi;
