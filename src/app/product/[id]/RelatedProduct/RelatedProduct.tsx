import React from 'react';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { IoIosArrowForward } from "react-icons/io";
import ProductCard  from '@/components/shared/CardBox/ProductCard';
const RelatedProduct = () => {
    return (
      <div>
        <div className=" flex justify-between items-end mb-12 ">
          <HeadingPrimary className=" text-5xl capitalize font-bold ">
            Related Products
          </HeadingPrimary>
          <div>
            <button className=" flex items-center font-bold text-primaryColor h-6 libreFranklin ">
              <p className=" text " >Explore All Works</p>
              <span className=" text-xl font-light ">
                <IoIosArrowForward></IoIosArrowForward>
              </span>
            </button>
          </div>
        </div>
        <div className=' grid grid-cols-4 gap-2 ' >
          <ProductCard className=" w-[302px] " ></ProductCard>
          <ProductCard className=" w-[302px] " ></ProductCard>
          <ProductCard className=" w-[302px] " ></ProductCard>
          <ProductCard className=" w-[302px] " ></ProductCard>
        </div>
      </div>
    );
};

export default RelatedProduct;