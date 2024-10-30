import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import React from "react";
import ProductSlider from './ProductSlider';

const Products = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center mb-12 ">
          <h2 className=" text-primaryColor tracking-widest libreFranklin mb-3 text-center ">
          PRODUCTS
          </h2>
          <HeadingPrimary className=" text-5xl font-bold w-full sm:w-[566px] text-center leading-tight ">
          Discover Your Next Favorite Assets
          </HeadingPrimary>
        </div>
      </Container>
      <div className=" mt-20 ">
      <ProductSlider></ProductSlider>
      </div>
    </div>
  );
};

export default Products;
