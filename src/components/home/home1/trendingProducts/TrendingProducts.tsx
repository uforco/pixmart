import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import PrimaryBtn from "@/components/shared/button/PrimaryBtn";
import { GoTrophy } from "react-icons/go";


const HeadLine = () => {
  return (
    <div className=" flex justify-between items-end mb-12 ">
      <HeadingPrimary className=" text-5xl leading-tight ">
        Trending Products
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
  );
};

const TrendingProducts = () => {
  return (
    <div>
      <Container>
        <div className=" flex justify-between  my-[120px] ">
          {/* left site section  */}
          <div className=" w-[840px] overflow-hidden ">
            <HeadLine></HeadLine>
            <div className=" grid grid-cols-2 gap-10 ">
              <TopSellProductCard></TopSellProductCard>
              <TopSellProductCard></TopSellProductCard>
              <TopSellProductCard></TopSellProductCard>
              <TopSellProductCard></TopSellProductCard>
            </div>
          </div>
          {/* right site section  */}
          <div className=" w-[400px] p-8 bg-secondaryColor rounded-xl ">
            <div>
              <HeadingPrimary className=" text-5xl leading-tight ">
                Beginning to Creativity
              </HeadingPrimary>
              <p className=" text-opionalColor/70 mt-3 ">
                Enjoy a 20% discount on all of Graphics and Designs for the
                first-time payment.
              </p>
              <PrimaryBtn className=" rounded-lg flex mt-6 justify-center items-center h-12 px-10 ">
                Shop Now
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingProducts;

const TopSellProductCard = () => {
  return (
    <div className=" w-full flex justify-center ">
      <div className=" w-[400px] h-[412px] ">
        <div className=" relative h-[328px] w-full bg-gray-200 overflow-hidden rounded-[20px] ">
          <div className=" absolute rounded-bl-2xl top-0 right-0 flex justify-center items-center p-4 text-2xl bg-primaryColor text-white " >
            <GoTrophy></GoTrophy>
          </div>
          {/* images */}
        </div>
        <div className=" mt-4 " >
          <div className=" flex justify-between items-center " >
            <HeadingPrimary className=" text-[28px] " >Biztar</HeadingPrimary>
            <span className=" text-primaryColor font-bold " >$8.00</span>
          </div>
          <p className=" text-opionalColor/70 " >Business Consultant - UI Kits</p>
        </div>
      </div>
    </div>
  );
};
