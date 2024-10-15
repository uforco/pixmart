import React from 'react';
import { TfiClose } from "react-icons/tfi";
import BestSeller from './BestSeller';

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

          <div></div>
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