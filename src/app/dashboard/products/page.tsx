"use client";
import { useGetMyProductQuery } from "@/src/redux/features/products/productApi";
import Link from "next/link";

const Products = () => {
  const { data: getMyProducts } = useGetMyProductQuery(undefined);
  const myPruducts = getMyProducts?.data;
  console.log(myPruducts);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
  {myPruducts?.map((product: any) => (
    <div
      key={product?._id}
      className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Product Image */}
      <Link href={`/product/${product?._id}`} className="block">
        <img
          className="h-48 w-full object-cover rounded-t-lg"
          src={
            product?.images ||
            "https://i.ibb.co/kBNtTmC/No-Image-Available.jpg"
          }
          alt={product?.name || "Product Image"}
        />
      </Link>

      <div className="px-4 py-1">
        {/* Product Title */}
        <Link href={`/product/${product?._id}`} className="block">
          <h2 className="text-lg font-bold text-teal-400 hover:text-teal-300 transition-colors duration-200">
            {product?.name || "Unnamed Product"}
          </h2>
        </Link>

        {/* Product Rating */}
        <div className="flex items-center text-yellow-400">
          <span className="text-lg">&#9733;</span>
          <p className="ml-1 text-sm text-gray-300">
            {product?.rating || "No Rating"}
          </p>
        </div>

        {/* Product Price and Quantity */}
        <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Price:</span> ${product?.price || "N/A"}
        </p>
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Qty:</span>{" "}
          {product?.inventoryCount || "N/A"}
        </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-2 gap-2">
          <button className="px-2  bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all">
            Update
          </button>
          <button className="px-2  bg-red-600 text-white rounded-md hover:bg-red-500 transition-all">
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Products;
