import BlogCard from '@/components/shared/CardBox/bolgCard/BlogCard';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import React from 'react';
import Grid1to3Card from '@/components/shared/BlogComp/Grid1to3Card';

const  HeadingSection = () => {
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
        <Grid1to3Card></Grid1to3Card>
      </>
    );
};

export default HeadingSection;