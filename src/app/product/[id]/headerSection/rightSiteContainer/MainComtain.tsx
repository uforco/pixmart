import React, { ChangeEvent } from 'react';
import { IoStarSharp } from "react-icons/io5";
import  HeadingPrimary  from '@/components/shared/headline/HeadingPrimary';
import LicenseQtyAndPrice from "./licenseQtyAndPrice/PriceLicense";
const MainComtain = () => {

    

    return (
      <div className=' flex flex-col justify-between gap-10 ' >
        <div className="  mt-1 ">
          <div className=" flex justify-start items-center gap-1 mb-2 ">
            <ul className=" flex justify-center items-center text-primaryColor gap-[2px] text-base ">
              <li>
                <IoStarSharp></IoStarSharp>
              </li>
              <li>
                <IoStarSharp></IoStarSharp>
              </li>
              <li>
                <IoStarSharp></IoStarSharp>
              </li>
              <li>
                <IoStarSharp></IoStarSharp>
              </li>
              <li>
                <IoStarSharp></IoStarSharp>
              </li>
            </ul>
            <p>{"( 50 )"}</p>
          </div>
          <HeadingPrimary className=" text-5xl mb-[24px] mt-[10px] ">
            Griya {"–"} Real Estate Dashboard UI
          </HeadingPrimary>
          <div className=" flex items-center gap-1  mb-10 ">
            <div className=" size-9 bg-gray-300 rounded-full "></div>
            <p className=" capitalize font-bold ">Tech Pioneers</p>
          </div>
          <p>
            The "Griya Real Estate Dashboard UI" is meticulously designed for
            real estate entrepreneurs and startups looking to make a significant
            impact online.
          </p>
        </div>
        <div>
          <LicenseQtyAndPrice></LicenseQtyAndPrice>
        </div>
      </div>
    );
};

export default MainComtain;