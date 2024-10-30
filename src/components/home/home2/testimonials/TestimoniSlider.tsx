"use client";
import * as React from "react";
import "./styles.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import { IoMdStar } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const TestimoniSlider = () => {
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });
  const nextSlide: any = () => instanceRef.current?.next()
  const prevSlide: any = () => instanceRef.current?.prev()
  return (
    <div ref={ref} className="keen-slider h-[330px] bg-none  ">
      <TestimonCard nextSlide={nextSlide} prevSlide={prevSlide} ></TestimonCard>
      <TestimonCard nextSlide={nextSlide} prevSlide={prevSlide} ></TestimonCard>
      <TestimonCard nextSlide={nextSlide} prevSlide={prevSlide} ></TestimonCard>
      <TestimonCard nextSlide={nextSlide} prevSlide={prevSlide} ></TestimonCard>
      <TestimonCard nextSlide={nextSlide} prevSlide={prevSlide} ></TestimonCard>
    </div>
  );
};

export default TestimoniSlider;




const TestimonCard = ({nextSlide, prevSlide}: {nextSlide: any, prevSlide: any}) => {
  return (
    <div className="keen-slider__slide number-slide6 w-full bg-none  flex justify-end items-center ">
      <div className=" w-full flex justify-end h-[318px] ">
        {/* main div */}
        <div className="w-[632px]  rounded-[20px]  bg-white text-opionalColor flex flex-col justify-between p-10  ">
          <p className=" text-[20px] libreFranklin ">
            Discovering PixMart's digital design assets and resources
            revolutionized my client projects. The quality and variety have
            allowed me to create stunning visuals that captivate my audience
            every time. Highly recommended for any creatives looking to elevate
            their work.
          </p>
          <div className=" flex justify-between items-end ">
            <div className=" flex gap-3 items-center ">
              <div className=" w-16 h-16 rounded-full bg-gray-200 "></div>
              <div>
                <HeadingPrimary className=" font-bold libreFranklin text-base mb-2 ">
                  Samuel Treavor
                </HeadingPrimary>
                <ul className=" flex gap-1 ">
                  <li className=" text-primaryColor text-lg ">
                    <IoMdStar></IoMdStar>
                  </li>
                  <li className=" text-primaryColor text-lg ">
                    <IoMdStar></IoMdStar>
                  </li>
                  <li className=" text-primaryColor text-lg ">
                    <IoMdStar></IoMdStar>
                  </li>
                  <li className=" text-primaryColor text-lg ">
                    <IoMdStar></IoMdStar>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className=" flex gap-2 ">
                <button onClick={prevSlide} className=" w-12 h-12 text-3xl rounded-full pr-1 hover:bg-primaryColor transition-all hover:text-secondaryColor cursor-pointer  bg-secondaryColor text-primaryColor flex justify-center items-center ">
                  <IoIosArrowBack></IoIosArrowBack>
                </button>
                <button onClick={nextSlide} className=" w-12 h-12 rounded-full text-3xl pl-1 hover:bg-primaryColor transition-all hover:text-secondaryColor cursor-pointer bg-secondaryColor text-primaryColor flex justify-center items-center ">
                  <IoIosArrowForward></IoIosArrowForward>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
