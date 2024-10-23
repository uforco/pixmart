'use client'
import Container from '@/components/shared/Container';
import SliderCard from '@/components/shared/productMarqueeSlider/SliderCard';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const AboutMarquee = () => {

    const [slides, setSlides] = useState<string[]>(
      Array.from({ length: 6 }).map((_, index) => `Slide ${index + 1}`)
    );

    return (
      <Container>
        <div className=" flex justify-center w-full items-center overflow-hidden bg-primaryColor/5 rounded-2xl ">
          <div className=" flex justify-center w-full items-center h-[444px] overflow-hidden    ">
            <div className=" w-full flex flex-col gap-4 ">
              <div>
                <Marquee direction="right">
                  {slides?.map((item: string) => (
                    <div
                      key={item}
                      className=" h-[330px] w-[520px] bg-white mx-2 p-2 rounded-xl  "
                    >
                      <SliderCard className=" h-full w-full bg-gray-300 rounded-lg flex justify-center items-center text-2xl ">
                        {item}
                      </SliderCard>
                    </div>
                  ))}
                </Marquee>
              </div>
              <div>
                <Marquee>
                  {slides?.map((item: string) => (
                    <div
                      key={item}
                      className=" h-[330px] w-[520px] bg-white mx-2 p-2 rounded-xl  "
                    >
                      <SliderCard className=" h-full w-full bg-gray-300 rounded-lg flex justify-center items-center text-2xl ">
                        {item}
                      </SliderCard>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default AboutMarquee;