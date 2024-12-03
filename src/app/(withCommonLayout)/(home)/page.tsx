// rafce
'use client'
import ProductsCard from "@/src/components/Card/ProductCard";
import { useGetAllProductQuery } from "@/src/redux/features/products/productApi";
import React from "react";

const HomePage = () => {
  const { data: allProduct } = useGetAllProductQuery(undefined);
  console.log(allProduct)
  return (
    <div>
      {/* <HeroSection /> */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 py-10 gap-4">
        {allProduct?.data?.map((product: any) => (
          <ProductsCard products={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
