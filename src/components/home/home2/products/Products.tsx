import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import React from "react";

const Products = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center mb-12 ">
          <h2 className=" text-primaryColor tracking-widest libreFranklin mb-3 text-center ">
            PRICING PLAN
          </h2>
          <HeadingPrimary className=" text-5xl font-bold w-full sm:w-[566px] text-center leading-tight ">
            Choose The Perfect Plan for Creative Potential
          </HeadingPrimary>
        </div>
      </Container>
      <div className=" flex justify-between items-center mt-20 ">
        
      </div>
    </div>
  );
};

export default Products;
