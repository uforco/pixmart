'use client'
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.scss';
// import required modules
import {Autoplay, Navigation } from 'swiper/modules';

import { IoIosArrowBack  , IoIosArrowForward  } from "react-icons/io";

const SliderCollection = () => {
    const sliderNavigation = "absolute text-white bg-primaryColor flex justify-center items-center -translate-y-1/2 top-1/2 rounded-full text-4xl  z-50 w-16 h-16  "

    return (
        <div className=" relative">
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            onSlideChange={(swiper: any) => {
                if(swiper.activeIndex == 0) swiper.navigation.prevEl.style.display = "none"
                if(swiper.activeIndex > 0) swiper.navigation.prevEl.style.display = "flex"
                if(swiper.activeIndex == swiper.slides.length - swiper.params.slidesPerView) swiper.navigation.nextEl.style.display = "none"
                if(swiper.activeIndex < swiper.slides.length - swiper.params.slidesPerView) swiper.navigation.nextEl.style.display = "flex"
            }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
            <SwiperSlide> <CollectionCard></CollectionCard> </SwiperSlide>
          </Swiper>
          
          <button
            className={`custom-prev ${sliderNavigation} -left-8 -translate-x-0 hidden `}
          >
            <  IoIosArrowBack  className=" -ml-2 " ></IoIosArrowBack>
          </button>
          <button
            className={`custom-next ${sliderNavigation} -right-8 translate-x-0  `}
          >
            <IoIosArrowForward className=" -mr-1 " ></IoIosArrowForward>
          </button>
        </div>
      );
};

export default SliderCollection;



const CollectionCard = () => {
    return(
        <div className=' w-full flex justify-center ' >
            <div className=' w-[372px] h-[430px] rounded-lg p-4 bg-white ' >
                <div className=' w-full h-[330px] rounded-lg bg-gray-200 ' ></div>
                <div className=' mt-3  ' >
                    <HeadingPrimary className=' text-xl ' >Education Social Media Feeds</HeadingPrimary>
                    <p className=' text-opionalColor/70 ' >100+ Items</p>
                </div>
            </div>
        </div>
    )
}