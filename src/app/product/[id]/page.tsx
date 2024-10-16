import React from "react";
import Container from "@/components/shared/Container";
import LeftMainComtain from "./headerSection/leftSiteContainer/MainComtain";
import RightMainComtain from "./headerSection/rightSiteContainer/MainComtain";
import Overview from "./Articel/Overview";
import ProductDetails from "./productDetails/ProductDetails";

const page = () => {
  return (
    <div className=" w-full ">
      <Container>
        <div className=" flex justify-between mb-20">
          <div className=" w-[711px] ">
            <LeftMainComtain />
            {/* <Overview></Overview> */}
          </div>
          <div className=" w-[513px] ">
            <RightMainComtain />
          </div>
        </div>
        <div className=" flex justify-between mb-20 ">
          <div className=" w-[711px] ">
            <Overview></Overview>
          </div>
          <div className=" w-[513px] ">
            <ProductDetails></ProductDetails>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
