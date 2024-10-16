import React from 'react';
import { TfiClose } from "react-icons/tfi";
import BestSeller from './BestSeller';
import { PiGridFour } from "react-icons/pi";
import { HiOutlineBars3 } from "react-icons/hi2";

const TopFiltersection = () => {
    return (
      <div>
        <div className=" flex justify-between mb-8 ">
          <div className=" flex justify-start items-center gap-5 ">
            <div className=" flex items-center gap-1 ">
              <Sortbtn></Sortbtn>
              {/* <Sortbtn></Sortbtn>
              <Sortbtn></Sortbtn> */}
            </div>
            <BestSeller></BestSeller>
          </div>
          <div className=" flex justify-between items-center gap-3 ">
            <p className=" text-opionalColor/50  libreFranklin ">Showing 12 out of 120 results.</p>
            <div className=" flex items-center justify-between gap-2 ">
              <button className=" size-12 rounded-xl text bg-primaryColor text-white flex justify-center items-center text-2xl ">
                <PiGridFour></PiGridFour>
              </button>
              <button className=" size-12 text-2xl rounded-xl bg-primaryColor text-white flex justify-center items-center ">
                <HiOutlineBars3></HiOutlineBars3>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopFiltersection;

const Sortbtn = () => {
  return (
    <div className=" flex w-[195px] h-12 rounded-full border px-5 border-primaryColor justify-between items-center gap-2 text-primaryColor text-xl ">
      <p className=' font-bold ' >UI Kit</p>
      <button className=' text-xl ' ><TfiClose></TfiClose></button>
    </div>
  );
}