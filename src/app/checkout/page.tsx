import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const page = () => {
    return (
      <div>
        <Container>
          <div className=" flex justify-between items-center py-16 ">
            <HeadingPrimary className=" text-5xl plusJakartaSans ">
              Checkout Details
            </HeadingPrimary>
            <button className=" text-primaryColor bg-primaryColor/10 font-bold rounded-lg w-[216px] h-16 overflow-hidden text-base ">
              Back to Shopping
            </button>
          </div>
        </Container>
        <CheckoutForm></CheckoutForm>
      </div>
    );
};

export default page;