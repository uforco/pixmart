import React from "react";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import Categorylist from "./categorylist/Categorylist";
import Container from "@/components/shared/Container";

const page = () => {
  return (
    <div>
      <div className=" h-[308px] flex items-center bg-gradient-to-b from-primaryColor/25 to-transparent ">
        <Container>
          <HeadingPrimary className=" leading-tight text-7xl ">
            Explore Top <br />{" "}
            <span className="text-primaryColor">UI Kits</span> Design Assets
          </HeadingPrimary>
        </Container>
      </div>
      <Container>
        <div className="w-full flex ">
          <div className="w-64"></div>
          <div className="w-full">
            <Categorylist></Categorylist>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
