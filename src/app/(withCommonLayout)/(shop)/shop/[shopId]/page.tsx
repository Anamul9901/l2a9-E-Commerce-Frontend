"use client";
import ProductsCard from "@/src/components/Card/ProductCard";
import {
  useAddfollowerMutation,
  useCheckMyFolloQuery,
  useGetFollowerCountQuery,
  useRemoveFollowerMutation,
} from "@/src/redux/features/Follower/followerApi";
import { useGetShopProductQuery } from "@/src/redux/features/products/productApi";
import { useGetSingleshopQuery } from "@/src/redux/features/shop/shopApi";
import { Button } from "@nextui-org/button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ShopPage = () => {
  const [productLimit, setProductLimit] = useState(10);
  const { shopId } = useParams();
  const { data: singleShop } = useGetSingleshopQuery(shopId);
  const singleShopData = singleShop?.data;
  const productData = { shopId, limit: productLimit };
  const { data: getShopProduct } = useGetShopProductQuery(productData);
  const shopProducts = getShopProduct?.data;
  const shopProductLength = shopProducts?.length;
  const { data: getFollowerCount } = useGetFollowerCountQuery(shopId);
  const followerThisShop = getFollowerCount?.data?.follower;
  const [addFollower] = useAddfollowerMutation();
  const [removeFollower] = useRemoveFollowerMutation();
  const { data: checkMyFollow } = useCheckMyFolloQuery(shopId);
  const isIFollowThisShop = checkMyFollow?.data?.isFollow;

  const handleFollowShop = async () => {
    const res = await addFollower(shopId);
  };

  const handleUnfollowShop = async () => {
    const res = await removeFollower(shopId);
  };

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 5 >=
        document.documentElement.scrollHeight
      ) {
        setProductLimit((prev) => prev + 10);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
  }, []);
  return (
    <div>
      {/* Profile Banner */}
      <div className="relative bg-gradient-to-r from-teal-500 to-teal-200 h-60">
        {/* Profile Info Container */}
        <div className="absolute bottom-6 left-6 flex items-center space-x-6 w-full">
          {/* Profile Picture */}
          <img
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            src={
              singleShopData?.logo ||
              "https://i.ibb.co.com/z89cgQr/profile.webp"
            }
            alt="Shop logo"
          />
          <div className="text-white w-full">
            {/* Shop Name */}
            <h2 className="text-4xl font-extrabold tracking-wide">
              {singleShopData?.name}
            </h2>
            {/* Shop Title */}
            <h3 className="text-lg font-medium italic text-gray-200">
              {singleShopData?.title}
            </h3>

            {/* Additional Info */}
            <div className="flex flex-wrap mt-4 space-y-1 md:space-y-0">
              <p className="w-full md:w-auto md:pr-4">
                📦 Products: {shopProductLength}
              </p>
              <p className="w-full md:w-auto md:pr-4">
                👥 Followers: {followerThisShop}
              </p>
              <p className="w-full md:w-auto">
                📅 Joined:{" "}
                {new Date(singleShopData?.cretedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>

            {/* Follow/Unfollow Buttons */}
            <div className="flex items-center mt-4 space-x-3">
              {isIFollowThisShop ? (
                <Button
                  onClick={handleUnfollowShop}
                  className="bg-default-500 hover:bg-default-600 text-white py-1.5 px-6 rounded-md font-semibold shadow-md"
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  onClick={handleFollowShop}
                  className="bg-teal-600 hover:bg-teal-800 text-white py-1.5 px-6 rounded-md font-semibold shadow-md"
                >
                  Follow
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* shop products */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 py-10 gap-4">
        {shopProducts?.map((product: any) => (
          <ProductsCard key={product.id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
