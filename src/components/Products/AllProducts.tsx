'use client'
import { useGetAllCategoryQuery } from "@/src/redux/features/Category/catogoryApi";
import { useGetAllProductQuery } from "@/src/redux/features/products/productApi";
import { Spinner } from "@nextui-org/spinner";
import React, { useState } from "react";
import ProductsCard from "../Card/ProductCard";

const AllProducts = () => {
  const [productLimit, setProductLimit] = useState(5);
  const [productPage, setProductPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const data = { limit: productLimit, page: productPage, searchTerm, category };
  const { data: allProduct, isLoading } = useGetAllProductQuery(data);

  const { data: getAllCategory } = useGetAllCategoryQuery(undefined);
  const categoryOptions = getAllCategory?.data;

  // Pagination handlers
  const handleNextPage = () => {
    if (allProduct?.data?.length > 0) {
      setProductPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (productPage > 1) {
      setProductPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row justify-end pt-4 mx-4">
        <div className="flex flex-col md:flex-row md:gap-2 pb-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by name or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-3 py-2 rounded-md w-full md:w-60 mb-2 md:mb-0"
          />
          <select
            value={sortOption}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-2 rounded-md w-full md:w-48"
          >
            <option value="" disabled>
              Sort by Category
            </option>
            {categoryOptions?.map((category: any, idx: number) => (
              <option value={category.key} key={idx}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 py-10 gap-4">
        {allProduct?.data?.map((product: any, idx: any) => (
          <ProductsCard products={product} key={idx} />
        ))}
      </div>

      {/* No Products Message */}
      {allProduct?.data?.length === 0 && (
        <p className="text-center text-2xl w-full">No products found</p>
      )}

      {/* Loading Spinner */}
      <div className="text-center text-2xl">{isLoading && <Spinner />}</div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 my-4">
        <button
          onClick={handlePreviousPage}
          disabled={productPage === 1}
          className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="font-bold">Page {productPage}</span>
        <button
          onClick={handleNextPage}
          disabled={allProduct?.data?.length < productLimit}
          className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
