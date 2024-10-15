
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import React, { useState } from "react";
import MarqueeSlider from "./MarqueeSlider";

const ProductSlider = () => {
  return (
    <div className=" relative my-20 after:contents[''] after:absolute after:top-0 left-0 after:w-full after:h-full flex items-center after:bg-gradient-to-t after:from-primaryColor/20 after:from-10% after:via-transparent after:via-30% after:z-40 after:to-white after:to-95 % bg-primaryColor/10 ">
      {/* middle card */}
      <div className=" z-50 w-[725px] h-[296px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl overflow-hidden flex justify-center items-center ">
        <div className=" text-center ">
          <h2 className=" uppercase font-light tracking-widest text-primaryColor font-[family-name:var(--font-libreFranklin)] ">
            Product
          </h2>
          <HeadingPrimary className=" text-5xl text-center my-5 mt-1 leading-tight ">
            Elevate Your Project with Premium Digital Assets
          </HeadingPrimary>
          <div className=" flex justify-center " >
            <button className=" bg-primaryColor    w-[158px] h-12 rounded-xl flex justify-center items-center text-white  ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* <Container> */}
      <div className=" w-full h-[700px] overflow-hidden ">
        <MarqueeSlider></MarqueeSlider>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default ProductSlider;
