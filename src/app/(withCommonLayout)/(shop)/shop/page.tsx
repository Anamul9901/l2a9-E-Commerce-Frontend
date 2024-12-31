"use client";

import { useGetAllshopQuery } from "@/src/redux/features/shop/shopApi";
import Link from "next/link";

const ShopPage = () => {
  const { data: getAllShop } = useGetAllshopQuery(undefined);
  const shops = getAllShop?.data;

  console.log("shop", shops);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Shop List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {shops?.map((shop: any) => (
          <div
            key={shop.id}
            className="bg-default-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={shop.logo}
              alt={shop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h2 className="text-xl font-semibold mb-2">{shop.name}</h2>
              <p className="text-default-700 mb-2">{shop.title}</p>
              <p className="text-sm text-gray-500">
                Followers: {shop.followers}
              </p>
              <p className="text-sm text-gray-500">
                Joined:{" "}
                {new Date(shop?.cretedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  href={`/shop/${shop.id}`}
                  className="inline-block mt-2 bg-teal-500 text-white text-sm font-medium py-2 px-6 rounded hover:bg-teal-600"
                >
                  View Shop
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
