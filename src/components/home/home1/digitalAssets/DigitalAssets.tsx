import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const DigitalAssets = () => {
  return (
    <div className=" bg-secondaryColor py-20 ">
      <Container>
        <div>
          <div className=" flex justify-between items-end ">
            <HeadingPrimary className=" text-5xl leading-tight ">
              Spotlight Digital <br /> Assets Selections
            </HeadingPrimary>
            <Link
              className=" flex gap-1 items-center text-primaryColor font-semibold "
              href={""}
            >
              <span>Explore Featured Works</span>
              <span className=" text-xl -mb-[2px] ">
                <IoIosArrowForward></IoIosArrowForward> 
              </span>
            </Link>
          </div>
          <div className=" flex justify-between mt-12 ">
            <DigitalCard></DigitalCard>
            <DigitalCard></DigitalCard>
            <DigitalCard></DigitalCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DigitalAssets;

const DigitalCard = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" w-[413px] bg-white rounded-lg p-5 ">
        <div className=" w-full h-[328px] bg-gray-200 rounded-lg ">
          {/* images */}
        </div>
        <div className=" mt-5 ">
          <div className=" flex justify-between  ">
            <HeadingPrimary className=" text-[28px] ">Flexsoul</HeadingPrimary>
            <div className=" bg-primaryColor text-white font-bold rounded-full h-[40px] flex justify-center items-center px-4  ">
              $12.00
            </div>
          </div>
          <p className=" text-opionalColor/70 mt-2 ">Yoga Studio - UI Kits</p>
        </div>
      </div>
    </div>
  );
};
