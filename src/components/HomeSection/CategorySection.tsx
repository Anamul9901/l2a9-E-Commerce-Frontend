"use client";
import { FaHome } from "react-icons/fa";
import { IoBookSharp, IoFastFoodOutline } from "react-icons/io5";
import { MdElectricBolt, MdOutlineSportsScore } from "react-icons/md";
import { TbBatteryAutomotive } from "react-icons/tb";
import { GiHeartBeats } from "react-icons/gi";
import { useRef } from "react";
import Link from "next/link";

const CategorySection = () => {
  const cetagorys = [
    { image: <MdElectricBolt />, name: "Electronics", key: "Electronics" },
    { image: <FaHome />, name: "Home" },
    { image: <MdOutlineSportsScore />, name: "Sports", key: "Sports" },
    { image: <IoBookSharp />, name: "Books", key: "Books" },
    { image: <IoFastFoodOutline />, name: "Food", key: "Food" },
    { image: <TbBatteryAutomotive />, name: "Automotive", key: "Automotive" },
    { image: <GiHeartBeats />, name: "Beauty", key: "Beauty" },
  ];

  const scrollRef: any = useRef(null);

  const scroll = (direction: any) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-10">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-teal-400 text-white px-2 py-1 rounded-full hover:bg-teal-600 z-10"
      >
        &lt;
      </button>

      {/* Category List */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden py-4 mx-8"
        style={{ scrollBehavior: "smooth" }}
      >
        {cetagorys.map((category, index) => (
          <Link
            href={`/products?key=${category.name}`}
            key={index}
            className="text-center bg-default-50 p-4 md:w-[200px] w-[130px] rounded-lg shadow-md flex-shrink-0 text-default-700"
          >
            <div className="flex justify-center items-center mb-2">
              <p className="md:text-3xl text-2xl">{category.image}</p>
            </div>
            <p className="md:text-lg font-semibold">{category.name}</p>
          </Link>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-teal-400 text-white px-2 py-1 rounded-full hover:bg-teal-600 z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default CategorySection;
