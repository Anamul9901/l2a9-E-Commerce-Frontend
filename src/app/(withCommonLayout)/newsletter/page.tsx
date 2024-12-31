"use client";

import { useGetAllnewsletterQuery } from "@/src/redux/features/blog/blogApi";
import Image from "next/image";
import Link from "next/link";

const Newsletter = () => {
  const { data: GetAllNewsletter } = useGetAllnewsletterQuery(undefined);
  const newsletters = GetAllNewsletter?.data;
  return (
    <div className="min-h-[90vh]">
      <div className="max-w-7xl mx-auto py-4 px-4">
        <h2 className="text-3xl font-bold text-center mb-6 py-4">Our Newsletter</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters?.map((newsletter: any) => (
            <Link
              href={`/newsletter/${newsletter.id}`}
              key={newsletter.id}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition bg-default-50 hover:bg-default-100 duration-300 hover:cursor-pointer"
            >
              {/* newsletter Image */}
              <div className="relative w-full h-48">
                <Image
                  src={newsletter?.image}
                  alt={newsletter?.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* newsletter Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{newsletter?.name}</h3>
                <p className="text-sm text-default-600 mt-2">
                  {newsletter?.description?.slice(0, 30)}...
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-default-500">
                    {newsletter?.readingTime} min read
                  </span>
                  <span className="text-sm text-default-500">
                    {new Date(newsletter?.cretedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
