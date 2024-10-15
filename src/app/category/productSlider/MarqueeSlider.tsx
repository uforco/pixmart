"use client"
import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import SliderCard from "./SliderCard";

const MarqueeSlider = () => {
      const [slides, setSlides] = useState<string[]>(
        Array.from({ length: 6 }).map((_, index) => `Slide ${index + 1}`)
      );



    return (
      <div className=" w-full flex flex-col gap-6 ">
        <div>
          <Marquee direction="right">
            {slides?.map((item: string) => (
              <SliderCard
                key={item}
                className=" h-[400px] w-[720px] mx-3 border-[8px]  bg-gray-400 border-white rounded-lg flex justify-center items-center text-2xl "
              >
                {item}
              </SliderCard>
            ))}
          </Marquee>
        </div>
        <div>
          <Marquee>
            {slides?.map((item: string) => (
              <SliderCard
                key={item}
                className=" h-[400px] mx-3 w-[720px] border-[8px] bg-gray-400 border-white rounded-lg flex justify-center items-center text-2xl "
              >
                {item}
              </SliderCard>
            ))}
          </Marquee>
        </div>
      </div>
    );
};

export default MarqueeSlider;