import React from 'react';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import Container from '@/components/shared/Container';
import CartList from "./CartList";

const page = () => {
    return (
      <div>
        <Container>
          <div className=" flex justify-between items-center py-16 ">
            <HeadingPrimary className=" text-5xl plusJakartaSans ">
              Your Cart
            </HeadingPrimary>
            <button className=" text-primaryColor bg-primaryColor/10 font-bold rounded-lg w-[216px] h-16 overflow-hidden text-base ">
              Back to Shopping
            </button>
          </div>
        </Container>
        <CartList/>
        <div className=' w-full h-96 ' ></div>
      </div>
    );
};

export default page;