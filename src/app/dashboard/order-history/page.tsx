"use client";
import { useState } from "react";
import { useGetCustomerOrderQuery } from "@/src/redux/features/order/orderApi";
import { FaEye } from "react-icons/fa";

const OrderHistory = () => {
  const {
    data: customerOrder,
    isLoading,
    error,
  } = useGetCustomerOrderQuery(undefined);
  const orderHistory = customerOrder?.data;

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  // Open the modal and set the selected order
  const handleOpenModal = (order: any) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  if (isLoading) return <p>Loading order history...</p>;
  // if (error) return <p>Error fetching orders: {error.message}</p>;

  return (
    <div className="min-h-screen text-white flex justify-center pt-10 px-4 md:w-full">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Order History
        </h1>

        {orderHistory && orderHistory.length == 0 && (
          <p className="text-gray-600 text-center">No orders found.</p>
        )}

        {/* Desktop and Tablet: Futuristic Table */}
        <div className="overflow-x-auto shadow-2xl bg-gray-800 rounded-lg p-6 hidden md:block">
          <table className="min-w-full table-auto text-sm">
            {/* Head */}
            <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  No.
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Order Date
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-700 text-left font-semibold uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {orderHistory.map((order: any, idx: number) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-700 hover:bg-gray-700 transition-all duration-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-center md:text-left">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(order.cretedAt).toLocaleDateString()}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap ${
                      order.paymentStatus === "paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {order.paymentStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${order.totalPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.transactionId}
                  </td>
                  <td className="py-4 flex space-x-4 justify-center">
                    <div
                      onClick={() => handleOpenModal(order)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" || e.key === " "
                          ? handleOpenModal(order)
                          : null
                      }
                      className="text-xl text-green-500 hover:text-green-300 cursor-pointer"
                    >
                      <FaEye />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: Card Layout */}
        <div className="block md:hidden">
          {orderHistory.map((order: any, idx: number) => (
            <div
              key={order.id}
              className="border-b border-gray-700 p-4 mb-4 rounded-lg shadow-lg bg-gray-700"
            >
              <div className="flex justify-between">
                <span className="font-semibold text-purple-500">{idx + 1}</span>
                <div
                  onClick={() => handleOpenModal(order)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" || e.key === " "
                      ? handleOpenModal(order)
                      : null
                  }
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-700 rounded-full text-sm transition duration-300 cursor-pointer"
                >
                  View Details
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-200">
                  <span className="font-semibold">Order Date:</span>{" "}
                  {new Date(order.cretedAt).toLocaleDateString()}
                </p>
                <p
                  className={`text-gray-200 ${
                    order.paymentStatus === "paid"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  <span className="font-semibold">Payment Status:</span>{" "}
                  {order.paymentStatus}
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold">Total Price:</span> ${" "}
                  {order.totalPrice}
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold">Transaction ID:</span>{" "}
                  {order.transactionId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for showing order product details */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
          <div className="bg-slate-700 p-6 rounded shadow-lg w-3/4 max-w-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <p>
              <strong>Order ID:</strong> {selectedOrder.id}
            </p>
            <p>
              <strong>Payment Status:</strong> {selectedOrder.paymentStatus}
            </p>
            <p>
              <strong>Total Price:</strong> ${selectedOrder.totalPrice}
            </p>
            <p>
              <strong>Transaction ID:</strong> {selectedOrder.transactionId}
            </p>
            <p>
              <strong>Order Date:</strong>{" "}
              {new Date(selectedOrder.cretedAt).toLocaleDateString()}
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Products:</h3>
            <ul className="space-y-2">
              {selectedOrder?.productInfo?.cartItem?.map(
                (item: any, index: number) => (
                  <li key={index} className="border-b py-2">
                    <p>
                      <strong>Product Name:</strong> {item.productName}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <p>
                      <strong>Price:</strong> ${item.price}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
