"use client";
import { useGetAllProductQuery } from "@/src/redux/features/products/productApi";
import { Spinner } from "@nextui-org/spinner";
import ProductsCard from "../Card/ProductCard";
import Link from "next/link";

const ProductSection = () => {
  const { data: allProduct, isLoading } = useGetAllProductQuery({
    limit: 10,
    page: 1,
  });
  const products = allProduct?.data;
  console.log(products);
  return (
    <div className="container mx-auto p-2">
    {/* Header Section */}
    <div className="pt-10 text-end">
      <Link
        href="/products"
        className="text-blue-500 hover:underline text-lg font-semibold"
      >
        View All Products
      </Link>
    </div>
  
    {/* Main Content */}
    <main className="flex-1 mt-6">
      {/* Product List */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">
        {products?.map((product: any, idx: any) => (
          <ProductsCard products={product} key={idx} />
        ))}
      </div>
  
      {/* No Products Message */}
      {products?.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-2xl text-gray-500">No products found</p>
        </div>
      )}
  
      {/* Loading Spinner */}
      <div className="flex justify-center items-center h-20">
        {isLoading && <Spinner />}
      </div>
    </main>
  </div>
  
  );
};

export default ProductSection;
