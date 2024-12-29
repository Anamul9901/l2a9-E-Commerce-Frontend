import Image from "next/image";
import image1 from "../../../public/home1.jpg";
import image2 from "../../../public/home2.jpg";
import image3 from "../../../public/home3.jpg";
import image4 from "../../../public/home4.jpg";

import support1 from "../../../public/supportImage/support1.png";
import support2 from "../../../public/supportImage/support2.png";
import support3 from "../../../public/supportImage/support3.png";
import support4 from "../../../public/supportImage/support4.png";
import support5 from "../../../public/supportImage/support5.png";
import Link from "next/link";

const ExtraSectionOne = () => {
  const images = [image1, image2, image3, image4];
  const supportData = [
    {
      name: "Express Shipping",
      dis: "Fast, reliable delivery from global warehouses",
      image: support1,
    },
    {
      name: "Surprise Gifts",
      dis: "Refer a friend our web & get a surprise gift",
      image: support2,
    },
    {
      name: "Support 24/7",
      dis: "Feel Free to Call Us & Get Best Support Service",
      image: support3,
    },
    {
      name: "Affordable Prices",
      dis: "Factory Direct Prices for Maximum Savings",
      image: support4,
    },
    {
      name: "Secure Payments",
      dis: "Safer, faster and more secure way to pay online with",
      image: support5,
    },
  ];
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-4 grid-cols-2 justify-center items-center gap-4">
        {images?.map((item: any, idx: number) => (
          <Link href={"/products"} key={idx}>
            <Image
              className="rounded-lg hover:scale-105 duration-300"
              src={item}
              alt="image1"
              height={300}
              width={300}
            />
          </Link>
        ))}
      </div>{" "}
      {/* support section */}
      <div className="grid md:grid-cols-5 py-20 space-y-10 md:space-y-0 gap-2">
        {supportData?.map((item: any, idx: number) => (
          <div key={idx} className="text-center flex justify-center items-center hover:text-red-600">
            <div className="" >
              <div className="flex justify-center items-center">
                <Image
                  className="w-[30px]"
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <h1 className="text-sm font-bold ">{item.name}</h1>
                <h1 className="text-sm text-default-900">{item.dis}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSectionOne;
