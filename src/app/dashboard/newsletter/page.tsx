"use client";

import AddBlogModal from "@/src/components/modals/AddBlogModel";
import UpdateBlogModal from "@/src/components/modals/UpdateBlogModel";
import {
  useDeletenewsletterMutation,
  useGetAllnewsletterQuery,
} from "@/src/redux/features/blog/blogApi";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { data: GetAllNewsletter } = useGetAllnewsletterQuery(undefined);
  const newsletters = GetAllNewsletter?.data;
  const [deleteNewsletter] = useDeletenewsletterMutation();

  const handleDeleteNewsletter = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This Newsletter will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteNewsletter(id).unwrap();
        if (res.success) {
          toast.success("Newsletter Deleted Successfully");
        }
      }
    });
  };

  // For hydration error handle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen w-full text-white flex justify-center pt-10 px-4">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center pb-6">
          <h1 className="text-3xl font-bold">Newsletter</h1>
          <AddBlogModal />
        </div>

        {/* Futuristic Table Container for desktop and tablet */}
        <div className="overflow-x-auto shadow-2xl bg-gray-800 rounded-lg p-6 hidden md:block">
          <table className="min-w-full table-auto text-sm">
            {/* Head */}
            <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  No.
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Reading Time
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {newsletters?.map((blog: any, idx: number) => (
                <tr
                  key={blog._id}
                  className="border-b border-gray-700 hover:bg-gray-700 transition-all duration-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-center md:text-left">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center md:text-left">
                    {blog.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center md:text-left">
                    {blog.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center md:text-left">
                    <img
                      src={blog.image}
                      alt={blog.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center md:text-left">
                    {blog.readingTime} mins
                  </td>
                  <td className="py-4 items-center whitespace-nowrap flex justify-center md:justify-start space-x-4">
                    <button>
                      <UpdateBlogModal blog={blog} />
                    </button>
                    <button
                      className="px-2 py-1 bg-red-500 hover:bg-red-700 rounded-full text-sm transition duration-300"
                      onClick={() => handleDeleteNewsletter(blog._id)}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View: Card Layout */}
        <div className="block md:hidden">
          {newsletters?.map((blog: any, idx: number) => (
            <div
              key={blog._id}
              className="border-b border-gray-700 p-4 mb-4 rounded-lg shadow-lg bg-gray-700"
            >
              <div className="flex justify-between">
                <span className="font-semibold text-purple-500">{idx + 1}</span>
                <div className="space-x-2">
                  <button>
                    <UpdateBlogModal blog={blog} />
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 hover:bg-red-700 rounded-full text-sm transition duration-300"
                    onClick={() => handleDeleteNewsletter(blog._id)}
                  >
                    <MdDelete className="text-white" />
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-200">
                  <span className="font-semibold">Name:</span> {blog.name}
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold">Description:</span> {blog.description}
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold">Reading Time:</span> {blog.readingTime} mins
                </p>
                <img
                  src={blog.image}
                  alt={blog.name}
                  className="mt-2 h-16 w-16 object-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
