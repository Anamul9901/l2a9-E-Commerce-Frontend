"use client";
import SingleProductCard from "@/src/components/Card/SingleProductCard";
import { useGetSingleProductQuery } from "@/src/redux/features/products/productApi";
import { useParams } from "next/navigation";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { data: singleData } = useGetSingleProductQuery(productId);
  const singleProduct = singleData?.data;
  console.log(singleProduct);

  return (
    <div className="w-full h-[94vh] flex justify-center items-center">
      <SingleProductCard products={singleProduct} />
    </div>
  );
};

export default SingleProductPage;
