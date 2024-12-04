import Link from "next/link";
import Image from "next/image";
import { useCreateCartMutation } from "@/src/redux/features/cart/cartApi";
import { toast } from "sonner";

const ProductsCard = ({ products }: { products: any }) => {
  const [addToCart] = useCreateCartMutation();

  const handleDddToCart = async (productId: string) => {
    const data = { productId, quantity: 1 };
    const res = await addToCart(data).unwrap();
    if(res.success){
      toast.success(res.message)
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-y-105 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative">
        <Image
          className="w-full h-45 object-cover rounded-lg shadow-sm"
          src={
            products?.images ||
            "https://i.ibb.co/kBNtTmC/No-Image-Available.jpg"
          }
          alt={products?.title || "Product Image"}
          height={300}
          width={300}
          priority={true}
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Link
            href={`/product/${products?.id}`}
            className="text-sm px-4 py-2 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 transition"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-4 py-2">
        {/* Shop Information */}
        {/* <div className="flex items-center gap-3 pb-1">
          <Link href={`/profile/${products?.shop?.id}`}>
            <img
              src={
                products?.shop?.logo ||
                "https://i.ibb.co/kBNtTmC/No-Image-Available.jpg"
              }
              alt="Shop Logo"
              className="w-10 h-10 rounded-full border-2 border-teal-400"
            />
          </Link>
          <Link
            href={`/profile/${products?.shop?.id}`}
            className="text-teal-400 text-sm font-bold hover:text-teal-300"
          >
            {products?.shop?.name || "Shop Name"}
          </Link>
        </div> */}

        {/* Product Title */}
        <h3 className="text-lg font-semibold text-white truncate">
          {products?.name || "Product Name"}
        </h3>

        <div className="flex items-center justify-between">
          {/* Product Price */}
          <div className="flex items-center">
            <span className="text-teal-400 text-sm font-medium mr-1">
              Price:
            </span>
            <p className="text-lg text-white font-semibold">
              ${products?.price || "N/A"}
            </p>
          </div>

          {/* Divider */}
          <span className="text-gray-600 mx-3">|</span>

          {/* Product Quantity */}
          <div className="flex items-center">
            <span className="text-teal-400 text-sm font-medium mr-1">Qty:</span>
            <p className="text-lg text-white font-semibold">
              {products?.inventoryCount || "N/A"}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <Link  href={`/product/${products?.id}`} className="text-gray-400 text-sm mt-">
          {products?.title?.slice(0, 50) || "No description available."}...
        </Link>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center bg-gray-800 p-2">
        {/* Rating */}
        <div className="flex items-center text-teal-400">
          <span className="mr-1">⭐</span>
          <span className="text-sm">{products?.rating || "No Rating"}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          className="bg-teal-500 text-white text-sm px-4 py-2 rounded shadow-md hover:bg-teal-600 transition"
          onClick={() => handleDddToCart(products?.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
