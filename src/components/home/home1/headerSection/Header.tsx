import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import React from "react";
import PrimaryBtn from "@/components/shared/button/PrimaryBtn";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiTextTThin } from "react-icons/pi";

import ServiceIcon from './serviceicon/ServiceIcon';


const Header = () => {
  return (
    <div className=" pb-10 w-full bg-gradient-to-b from-primaryColor/20 via-gray-200/40 to-transparent ">
      <div>
        <Container>
          <div className=" flex justify-center ">
            <HeadingPrimary className=" w-[795px] text-center plusJakartaSans leading-tight text-6xl  ">
              Unleash Your Creativity <br /> to Utmost
              <span className=" text-primaryColor "> Potential </span> with Us
            </HeadingPrimary>
          </div>
          <p className=" text-center text-opionalColor/70 text-xl mt-5 mb-8 ">
            Discover the building blocks of your next masterpiece: premium
            digital assets at your fingertips.
          </p>
          <div>
            <div className=" flex justify-center items-center gap-3 ">
              <input
                className=" w-[436px] h-[70px] rounded-lg p-4 "
                type="search"
                placeholder="Find fonts, templates, illustrations, and more…"
              ></input>
              <PrimaryBtn className=" w-[184px] h-[72px] flex justify-center items-center rounded-lg ">
                Search Now
              </PrimaryBtn>
            </div>
          </div>
        </Container>
        <Container>
          <div className=" flex justify-center items-center mt-16 ">
            <div className=" relative ">
              <div className=" w-[1054px] h-[615px] bg-gray-400  rounded  ">
                {/* main container */}
              </div>
              {/* absolute path box */}
              <div className=" absolute top-9 left-0 h-14 w-14 rounded-md bg-white flex justify-center items-center ">
                <p className=" text-primaryColor text-3xl ">
                  <MdOutlineDesignServices></MdOutlineDesignServices>
                </p>
              </div>
              <div className=" absolute bottom-64 -right-24 h-14 w-14 shadow-xl shadow-gray-200 rounded-md bg-white flex justify-center items-center ">
                <p className=" text-primaryColor text-3xl ">
                  <PiTextTThin></PiTextTThin>
                </p>
              </div>
              <div className=" absolute top-1/2 -left-[140px] -translate-y-1/2 h-[350px] w-[171px] rounded-md bg-gray-300 "></div>
              <div className=" absolute top-[50px] -right-[140px] h-[180px] w-[180px] rounded-md bg-gray-300 "></div>
              <div className=" absolute bottom-12 -right-[80px] h-[140px] w-[250px] rounded-md bg-gray-300 "></div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
            <ServiceIcon></ServiceIcon>
        </Container>
      </div>
    </div>
  );
};

export default Header;
