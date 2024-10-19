import React from 'react';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { BsSearch } from "react-icons/bs";
import CategorySelector from './CategorySelector';
import ProductCard from '@/components/shared/CardBox/ProductCard';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const ProductList = () => {
    return (
      <div className=" mt-20 ">
        <Container>
          <div>
            <HeadingPrimary className=" text-[28px] font-bold mb-2 ">
              Products by Creator
            </HeadingPrimary>
          </div>
          <div className=" w-full overflow-hidden  ">
            <div className=" flex justify-between w-full items-center  ">
              <div className="relative  w-[630px] overflow-hidden border rounded-lg p-1 h-16 ">
                <input
                  type="text"
                  name="search"
                  className={`block w-full libreFranklin p-2 ps-2 text-base  focus:outline-0  h-[58px] `}
                  placeholder="Search assets ..."
                  // required
                />
                <button
                  type="submit"
                  className="text-primaryColor transition-all hover:text-2xl p-4 absolute uppercase font-bold end-1 top-1/2 -translate-y-1/2 libreFranklin text-xl "
                >
                  <BsSearch></BsSearch>
                </button>
              </div>
              <div className=" h-full ">
                <CategorySelector></CategorySelector>
              </div>
            </div>
          </div>
          <div className=" mt-12 grid grid-cols-4 gap-y-4 ">
            <div className=" w-full flex justify-center ">
              <ProductCard className=" w-[302px] overflow-hidden "></ProductCard>
            </div>
            <div className=" w-full flex justify-center ">
              <ProductCard className=" w-[302px] overflow-hidden "></ProductCard>
            </div>
            <div className=" w-full flex justify-center ">
              <ProductCard className=" w-[302px] overflow-hidden "></ProductCard>
            </div>
            <div className=" w-full flex justify-center ">
              <ProductCard className=" w-[302px] overflow-hidden "></ProductCard>
            </div>
            <div className=" w-full flex justify-center ">
              <ProductCard className=" w-[302px] overflow-hidden "></ProductCard>
            </div>
            <div className=" w-full flex justify-center ">
              <ProductCard className=" w-[302px] overflow-hidden "></ProductCard>
            </div>
            <div className=" w-full flex justify-center ">
              <ProductCard className=" w-[302px] overflow-hidden "></ProductCard>
            </div>
            <div className=" w-full flex justify-center ">
              <ProductCard className=" w-[302px] overflow-hidden "></ProductCard>
            </div>
          </div>
          <div className=' flex justify-between items-center my-16 ' >
            <div>
              <button className=" w-14 h-14 rounded-full flex justify-center items-center bg-primaryColor/20 hover:text-white hover:bg-primaryColor transition-all text-xl text-primaryColor ">
                <span className=" -mr-2 ">
                  <MdArrowBackIos></MdArrowBackIos>
                </span>
              </button>
            </div>
            <div>
              <ul className=' flex gap-12 text-xl font-bold justify-between items-center ' >
                <li className=" text-primaryColor " >01</li>
                <li>02</li>
                <li>03</li>
                <li>....</li>
                <li>112</li>
              </ul>
            </div>
            <div>
              <button className=" w-14 h-14 rounded-full flex justify-center items-center bg-primaryColor/20 hover:text-white hover:bg-primaryColor transition-all text-xl text-primaryColor ">
                <span>
                  <MdArrowForwardIos></MdArrowForwardIos>
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default ProductList;