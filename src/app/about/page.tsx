import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import React from "react";
import AboutMarquee from "./marqueeSliderabout/AboutMarquee";
import AboutInfo from "./aboutInfo/AboutInfo";
import Milestonea from "./milestonea/Milestonea";
import Team from "./team/Team";
import Values from "@/components/shared/valuesAbout/Values";
import DigitalCreative from "@/components/shared/digitalcreative/DigitalCreative";
import Awards from "@/components/shared/awards/Awards";

const page = () => {
  return (
    <div className="aboutsection ">
      <div className=" py-10 pt-14 bg-gradient-to-b from-primaryColor/10 to-white ">
        <Container>
          <div className=" flex flex-col gap-2 justify-center items-center ">
            <p className=" uppercase text-primaryColor font-bold plusJakartaSans ">
              MARKETPLACE
            </p>
            <HeadingPrimary className=" w-[790px] text-center plusJakartaSans leading-tight text-6xl  ">
              Unleash Your Creativity to Utmost{" "}
              <span className=" text-primaryColor ">Potential</span> with Us
            </HeadingPrimary>
          </div>
        </Container>
        <div className=" mt-20 ">
          <AboutMarquee></AboutMarquee>
        </div>
      </div>
      <AboutInfo></AboutInfo>
      <Milestonea></Milestonea>
      <Values valueClass="justify-end" ></Values>
      <Team></Team>
      <Awards></Awards>
      <div className=" border border-transparent " >
        <DigitalCreative></DigitalCreative>
      </div>
    </div>
  );
};

export default page;
