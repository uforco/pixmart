import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import React from 'react';
import AboutMarquee from './marqueeSliderabout/AboutMarquee';
import AboutInfo from './aboutInfo/AboutInfo';
import Milestonea from './milestonea/Milestonea';

const page = () => {
    return (
      <div className=" pb-10 aboutsection ">
        <div className=" pb-10 bg-gradient-to-b from-primaryColor/10 to-gray-50 ">
          <Container>
            <div className=" flex flex-col gap-2 justify-center items-center ">
              <p className=" uppercase text-primaryColor font-bold plusJakartaSans ">
                MARKETPLACE
              </p>
              <HeadingPrimary className=" w-[790px] text-center plusJakartaSans leading-tight text-6xl  ">
                Unleash Your Creativity to Utmost{" "}
                <span className=" text-primaryColor ">Potential</span> with Us
              </HeadingPrimary>
            </div>
          </Container>
          <div className=" mt-20 ">
            <AboutMarquee></AboutMarquee>
          </div>
        </div>
        <AboutInfo></AboutInfo>
        <Milestonea></Milestonea>
      </div>
    );
};

export default page;