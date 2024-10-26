import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";

const ProductCard = ({className: classname, imageSize}: {className?: string, imageSize?: string}) => {
  return (
    <div className=" flex justify-center " >
      <Link href={"/product/756"}>
      <div
        className={` flex flex-col h-[388px] ${classname} overflow-hidden plusJakartaSans border-gray-700 `}
      >
        <div className={` ${imageSize} w-full h-[260px] bg-gray-300 rounded-[20px]`}>
          {/* <Image src={''} alt={''}></Image> */}
        </div>
        <div className=" pt-4 ">
          <h2 className=" text-xl font-bold plusJakartaSans ">SkyHomes</h2>
          <p className=" text-opionalColor/60 text-base plusJakartaSans">
            sub title
          </p>
          <div className=" flex justify-between items-center pt-3 ">
            <div>
              <p
                className={` text-opionalColor font-bold text-xl text-left plusJakartaSans`}
              >
                $11.00
              </p>
            </div>
            <div className=" text-right text-primaryColor ">
              <div className=" border-gray-800 text-xl w-20 h-10 rounded-full bg-lightPrimaryColor flex justify-center items-center ">
                <MdOutlineShoppingBag></MdOutlineShoppingBag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default ProductCard;
