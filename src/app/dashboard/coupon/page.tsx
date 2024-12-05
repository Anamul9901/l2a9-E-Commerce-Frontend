"use client";
import React from "react";
import AddCouponModel from "@/src/components/modals/AddCouponModel";
import { useGetVendorCouponQuery } from "@/src/redux/features/coupon/couponApi";
import { MdDelete } from "react-icons/md";

const CouponPage = () => {
  // Fetch coupons
  const { data: getAllCoupon } = useGetVendorCouponQuery(undefined);
  const allCoupon = getAllCoupon?.data;

  const handleDeleteCoupon = async (id: string) => {
    console.log(id)
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-4xl mx-auto  shadow-md rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold ">Manage Coupons</h1>
          <button className="">
            <AddCouponModel />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  #
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Coupon Code
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Discount (%)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {allCoupon?.length > 0 ? (
                allCoupon.map((coupon: any, index: number) => (
                  <tr key={coupon.id} className="hover:bg-gray-800">
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {coupon.couponCode}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {coupon.discount}
                    </td>
                    <td
                      
                      className="border border-gray-300 px-4 py-2 pl-8"
                    >
                      <MdDelete onClick={() => handleDeleteCoupon(coupon.id)} className="text-xl text-red-500 items-center" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center text-gray-600">
                    No coupons available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CouponPage;
