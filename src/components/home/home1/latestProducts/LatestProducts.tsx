import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Container from '@/components/shared/Container';
import ProductCard  from '@/components/shared/CardBox/ProductCard';




const HeadLine = () => {
    return (
      <div className=" flex justify-between items-end mb-12 ">
        <HeadingPrimary className=" text-5xl leading-tight ">
            Latest Products Section
        </HeadingPrimary>
        <Link
          className=" flex gap-1 items-center text-primaryColor font-semibold "
          href={""}
        >
          <span>Explore Latest Works</span>
          <span className=" text-xl -mb-[2px] ">
            <IoIosArrowForward></IoIosArrowForward>
          </span>
        </Link>
      </div>
    );
  };


const LatestProducts = () => {
    return (
        <div className=' my-[120px] ' >
            <Container>
                <HeadLine></HeadLine>
                <div className=' grid grid-cols-4 w-full gap-y-5 ' >
                <ProductCard className=' w-[302px] ' ></ProductCard>
                <ProductCard className=' w-[302px] ' ></ProductCard>
                <ProductCard className=' w-[302px] ' ></ProductCard>
                <ProductCard className=' w-[302px] ' ></ProductCard>
                <ProductCard className=' w-[302px] ' ></ProductCard>
                <ProductCard className=' w-[302px] ' ></ProductCard>
                <ProductCard className=' w-[302px] ' ></ProductCard>
                <ProductCard className=' w-[302px] ' ></ProductCard>
                </div>
            </Container>
        </div>
    );
};

export default LatestProducts;