import Image from "next/image";
import image1 from "../../../public/home1.jpg";
import image2 from "../../../public/home2.jpg";
import image3 from "../../../public/home3.jpg";
import image4 from "../../../public/home4.jpg";
import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";
import { MdSupportAgent } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RiSecurePaymentFill } from "react-icons/ri";

const ExtraSectionOne = () => {
  const images = [image1, image2, image3, image4];
  const supportData = [
    {
      name: "Express Shipping",
      dis: "Fast, reliable delivery from global warehouses",
      icon: <LiaShippingFastSolid />,
    },
    {
      name: "Surprise Gifts",
      dis: "Refer a friend our web & get a surprise gift",
      icon: <TfiGift/>,
    },
    {
      name: "Support 24/7",
      dis: "Feel Free to Call Us & Get Best Support Service",
      icon: <MdSupportAgent/>,
    },
    {
      name: "Affordable Prices",
      dis: "Factory Direct Prices for Maximum Savings",
      icon: <TfiShoppingCartFull/>,
    },
    {
      name: "Secure Payments",
      dis: "Safer, faster and more secure way to pay online with",
      icon: <RiSecurePaymentFill/>,
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
          <div
            key={idx}
            className="text-center flex justify-center items-center hover:text-red-500"
          >
            <div className="">
              <div className="flex justify-center items-center">
                <p className="text-3xl">{item.icon}</p>
              </div>
              <div>
                <h1 className="text-sm font-bold ">{item.name}</h1>
                <h1 className="text-sm text-default-600">{item.dis}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSectionOne;
