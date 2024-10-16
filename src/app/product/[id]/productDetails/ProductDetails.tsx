import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { TbDimensions } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";

const ProductDetails = () => {
  const tags = [
    "Real Estate",
    "Startup",
    "UI Kit",
    "Modern",
    "Figma",
    "Sketch",
    "Adobe XD",
    "Responsive",
  ];

  const productInfo = (
    <>
      <li className=" flex justify-between items-center pt-0 py-4 border-b ">
        <p className=" flex items-center gap-2 ">
          <span className=" text-xl text-primaryColor ">
            <FaCalendarDays></FaCalendarDays>
          </span>
          <span className=" font-bold text-base ">Created</span>
        </p>
        <p>September 1, 2024</p>
      </li>
      <li className=" flex justify-between items-center py-4 border-b ">
        <p className=" flex items-center gap-2 ">
          <span className=" text-xl text-primaryColor ">
            <FaFolderOpen></FaFolderOpen>
          </span>
          <span className=" font-bold text-base ">File Size</span>
        </p>
        <p>120 MB</p>
      </li>
      <li className=" flex justify-between items-center py-4 border-b ">
        <p className=" flex items-center gap-2 ">
          <span className=" text-xl text-primaryColor ">
            <TbDimensions></TbDimensions>
          </span>
          <span className=" font-bold text-base ">File Dimensions</span>
        </p>
        <p>1920x1080 px</p>
      </li>
      <li className=" flex justify-between items-center py-4 ">
        <p className=" flex items-center gap-2 ">
          <span className=" text-xl text-primaryColor ">
            <TbWorld></TbWorld>
          </span>
          <span className=" font-bold text-base ">Compatible App</span>
        </p>
        <p>Figma, Sketch, Adobe XD</p>
      </li>
    </>
  );

  return (
    <div className=" flex flex-col gap-16 ">
      <div>
        <HeadingPrimary className=" font-bold mb-6 text-[28px] plusJakartaSans ">
          Product Details
        </HeadingPrimary>
        <div className=" libreFranklin text-opionalColor ">
          <ul className=" libreFranklin text-opionalColor h-[219px] overflow-hidden ">
            {productInfo}
          </ul>
        </div>
      </div>
      <div>
        <HeadingPrimary className=" font-bold text-[28px] mb-6 plusJakartaSans ">
          Product Tags
        </HeadingPrimary>
        <div className=" w-full  ">
          <ul className=" w-full ">
            {tags.map((item: string) => (
              <li className=" inline-block " key={item}>
                <button className=" mr-2 mb-[10px] h-9 rounded-full overflow-hidden px-6 py-[6px] text-primaryColor border border-primaryColor  ">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
