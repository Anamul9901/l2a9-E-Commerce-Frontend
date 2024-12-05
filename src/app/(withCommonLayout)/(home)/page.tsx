// rafce
"use client";
import ProductsCard from "@/src/components/Card/ProductCard";
import { useGetAllProductQuery } from "@/src/redux/features/products/productApi";
import { Spinner } from "@nextui-org/spinner";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [productLimit, setProductLimit] = useState(10);
  const [productPage, setProductPage] = useState(1);
  const data = { limit: productLimit, page: productPage };
  const { data: allProduct, isLoading } = useGetAllProductQuery(data);
  console.log(allProduct);

  const handelInfiniteScroll = async () => {
    console.log("scrollHeight" + document.documentElement.scrollHeight);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 5 >=
        document.documentElement.scrollHeight
      ) {
        // setProductPage((prev) => prev + 1);
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
      {/* <HeroSection /> */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 py-10 gap-4">
        {allProduct?.data?.map((product: any) => (
          <ProductsCard products={product} />
        ))}
      </div>
      <div className="text-center text-2xl">{isLoading && <Spinner />}</div>
    </div>
  );
};

export default HomePage;
