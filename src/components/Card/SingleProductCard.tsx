import Link from "next/link";
import Image from "next/image";
import {
  useCheckSameVendorProductQuery,
  useCreateCartMutation,
} from "@/src/redux/features/cart/cartApi";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useGetAllProductQuery } from "@/src/redux/features/products/productApi";

const SingleProductCard = ({ products }: { products: any }) => {
  const [addToCart] = useCreateCartMutation();
  const { data: checkSameVendorProduct } =
    useCheckSameVendorProductQuery(undefined);
  const CheckSameVendorProductId = checkSameVendorProduct?.data?.vendorId;
  const productCategory = products?.category;

  const { data: categoryProducts, isLoading } = useGetAllProductQuery({
    category: productCategory,
    limit: 5,
  });

  const reletedCategoryProduct = categoryProducts?.data;

  const handleDddToCart = async (productId: string, vendorId: string) => {
    if (CheckSameVendorProductId == vendorId) {
      const data = { productId, vendorId, quantity: 1 };

      const res = await addToCart(data).unwrap();
      if (res.success) {
        toast.success(res.message);
      }
    }
    if (CheckSameVendorProductId != vendorId) {
      //Replace the cart with the new product
      Swal.fire({
        title: "Are you sure?",
        text: "Replace the cart with the new products!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, replace it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = { productId, vendorId, quantity: 1 };

          const res = await addToCart(data).unwrap();
          if (res.success) {
            toast.success(res.message);
          }
        }
      });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center  p-6">
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        {/* Product Image & Details */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <Image
              src={
                products?.images ||
                "https://i.ibb.co/kBNtTmC/No-Image-Available.jpg"
              }
              alt={products?.title || "Product Image"}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {products?.name || "Product Name"}
            </h2>
            <p className="text-gray-700">
              {products?.title || "No description available."}
            </p>
            <p className="text-xl text-teal-600 font-semibold">
              ${products?.price || "N/A"}
            </p>
            <button
              className="bg-teal-500 text-white px-6 py-2 rounded-md shadow hover:bg-teal-600 transition"
              onClick={() => handleDddToCart(products?.id, products?.userId)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Product Details</h3>
          <ul className="space-y-2">
            <li>Category: {products?.category || "N/A"}</li>
            <li>Stock: {products?.inventoryCount || "N/A"}</li>
          </ul>
        </div>

        {/* Customer Reviews */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
          {products?.reviews?.length ? (
            products.reviews.map((review: any, idx: number) => (
              <div key={idx} className="border-b pb-4 mb-4">
                <p className="font-semibold text-gray-800">{review.user}</p>
                <p className="text-gray-600">{review.comment}</p>
                <span className="text-teal-500">Rating: {review.rating}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
          <div className="grid itece lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
          {reletedCategoryProduct?.map((product: any, idx: number) => (
            <ReletedProduct products={product} key={idx}/>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

const ReletedProduct = ({ products }: { products: any }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image
        src={
          products?.images || "https://i.ibb.co/kBNtTmC/No-Image-Available.jpg"
        }
        alt={products?.title || "Product Image"}
        width={200}
        height={200}
        className="rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2 text-gray-800">
        {products?.name || "Product Name"}
      </h3>
      <p className="text-teal-600 font-bold">${products?.price || "N/A"}</p>
      <button className="bg-teal-500 text-white px-4 py-1 mt-2 rounded-md shadow hover:bg-teal-600 transition">
        View Details
      </button>
    </div>
  );
};

export default SingleProductCard;
