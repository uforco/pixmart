"use client";
import React, { useState } from "react";
import { MdOutlineHorizontalRule, MdAdd } from "react-icons/md";

const PriceAndQty = () => {
  const [qty, setQty] = useState<number>(1);

  return (
    <div className=" flex justify-between items-center ">
      <div>
        <div className=" flex items-center w-[142px] justify-between h-8 overflow-hidden ">
          <button className=" text-3xl plusJakartaSans  flex justify-center items-center ">
            <MdOutlineHorizontalRule></MdOutlineHorizontalRule>
          </button>

          <p className=" text-2xl plusJakartaSans font-bold ">{qty}</p>

          <button className=" text-3xl plusJakartaSans font-bold flex justify-center items-center ">
            <MdAdd></MdAdd>
          </button>
        </div>
      </div>
      <div>
        <p className="plusJakartaSans font-bold text-[28px] text-primaryColor ">$16.00</p>
      </div>
    </div>
  );
};

export default PriceAndQty;
