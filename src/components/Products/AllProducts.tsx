"use client";
import { useGetAllProductQuery } from "@/src/redux/features/products/productApi";
import { Spinner } from "@nextui-org/spinner";
import React, { useState, useMemo, useEffect } from "react";
import ProductsCard from "../Card/ProductCard";
import { useGetAllCategoryQuery } from "@/src/redux/features/Category/catogoryApi";
const AllProducts = () => {
  const [productLimit, setProductLimit] = useState(8);
  const [productPage, setProductPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [searchParams, setSearchParams] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam: any = params.get("key");
    const searchParam: any = params.get("search");
    setCategory(keyParam);
    setSearchParams(searchParam);
  }, []);

  const filters = {
    limit: productLimit,
    page: productPage,
    searchTerm: searchTerm || searchParams,
    category,
    rating,
  };

  const { data: allProduct, isLoading } = useGetAllProductQuery(filters);
  const { data: getAllCategory } = useGetAllCategoryQuery(undefined);
  const categoryOptions = getAllCategory?.data;

  // Filter products locally based on min and max price
  const filteredProducts = useMemo(() => {
    if (!allProduct?.data) return [];
    return allProduct.data.filter((product: any) => {
      const productPrice = parseFloat(product.price); // Ensure product.price is a number
      const min = parseFloat(minPrice) || 0; // Default to 0 if empty
      const max = parseFloat(maxPrice) || Infinity; // Default to Infinity if empty
      return productPrice >= min && productPrice <= max;
    });
  }, [allProduct?.data, minPrice, maxPrice]);

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
    <div className="flex flex-wrap">
      {/* Sidebar Filters */}
      <aside className="w-full sm:w-64 md:w-80 lg:w-1/4 xl:w-1/5 border-r p-4 mb-4 md:mb-0">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Search Filter */}
        <div className="mb-4">
          <label htmlFor="search" className="block font-medium mb-2">
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
          >
            <option value="">All Categories</option>
            {categoryOptions?.map((category: any, idx: number) => (
              <option value={category.key} key={idx}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            Price Range
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border px-3 py-2 rounded-md w-1/2"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border px-3 py-2 rounded-md w-1/2"
              />
            </div>
          </label>
        </div>

        {/* Rating Filter */}
        {/* <div className="mb-4">
          <label htmlFor="rating" className="block font-medium mb-2">
            Ratings
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
          >
            <option value="">All Ratings</option>
            <option value="1">1 Star & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="4">4 Stars & Up</option>
            <option value="5">5 Stars</option>
          </select>
        </div> */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Product List */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {filteredProducts.map((product: any, idx: any) => (
            <ProductsCard products={product} key={idx} />
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-2xl text-gray-500">
            No products found
          </p>
        )}

        {/* Loading Spinner */}
        <div className="text-center text-2xl">{isLoading && <Spinner />}</div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mb-4 pt-6">
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
      </main>
    </div>
  );
};

export default AllProducts;
