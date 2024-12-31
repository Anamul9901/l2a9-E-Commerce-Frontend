"use client";

import { useGetSinglenewsletterQuery } from "@/src/redux/features/blog/blogApi";
import { useParams } from "next/navigation";
import { useState } from "react";

const SingleNewsletter = () => {
  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { newsletterId } = useParams();
  console.log("blogId", newsletterId);

  const { data: getSingleNewsletter } =
    useGetSinglenewsletterQuery(newsletterId);
  const newsletter = getSingleNewsletter?.data;

  return (
    <div className="min-h-[94vh] pt-20 px-4 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Blog Image */}
        <div className="relative w-full h-60">
          <img
            src={
              newsletter?.image ||
              "https://i.ibb.co.com/kBNtTmC/No-Image-Available.jpg"
            }
            alt={newsletter?.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* newsletter Content */}
        <div className="flex justify-between text-sm text-gray-500 py-4">
          <span>{newsletter?.readingTime} min read</span>
          <span>{new Date(newsletter?.cretedAt).toLocaleDateString()}</span>
        </div>
        <h2 className="text-3xl font-semibold mb-4">{newsletter?.name}</h2>
        <p className="text-lg text-gray-600 mb-6">{newsletter?.description}</p>
      </div>
    </div>
  );
};

export default SingleNewsletter;
