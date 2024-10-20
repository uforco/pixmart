import BlogCard from '@/components/shared/CardBox/bolgCard/BlogCard';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import React from 'react';

const HeadingSection = () => {
    return (
      <>
        <div className=" h-[308px] flex items-center bg-gradient-to-b from-primaryColor/25 to-transparent ">
          <Container>
            <div className=" flex flex-col gap-2 justify-center items-center ">
              <p className=" uppercase text-primaryColor font-bold plusJakartaSans ">
                blog
              </p>
              <HeadingPrimary className=" w-[654px] text-center plusJakartaSans leading-tight text-6xl  ">
                Dive into World of Designs and Creativity
              </HeadingPrimary>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className=" mb-[120px] ">
              <div className=" grid grid-cols-12 grid-rows-12 gap-4  ">
                <div className="  col-span-7  row-span-12">
                  <BlogCard
                    badgePosition=" right-3 top-3  "
                    className=" bg-white  w-full h-[794px] p-[8px] shadow-none "
                    imageSize=" h-[654px] "
                    headlineStyles=" text-[28px] "
                  ></BlogCard>
                </div>
                <div className="  col-span-5 row-span-6 ">
                  <BlogCard
                    badgePosition=" right-3 top-3  "
                    className=" bg-white w-full h-[385px] p-[8px] shadow-none "
                    imageSize=" h-[270px]"
                    headlineStyles=" text-[20px] mt-3 "
                  ></BlogCard>
                </div>
                <div className="  col-span-5 row-span-6 ">
                  <BlogCard
                    badgePosition=" right-3 top-3  "
                    className=" bg-white w-full h-[385px] p-[8px] shadow-none "
                    imageSize=" h-[270px]"
                    headlineStyles=" text-[20px] mt-3 "
                  ></BlogCard>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
};

export default HeadingSection;