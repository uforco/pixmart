'use client'
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const BestSeller = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [sortitem, setSortItem] = useState<string>("Select all");
    const sortlist = [
        "Select all",
        "Best Seller",
        "Ux Design",
        "photoshop",
        "XD tools"
    ]

    const sortFunc = (e: string) => {
        setSortItem(e)
    }

    console.log(dropdown);

    return (
      <div className=" z-50 relative w-[180px] ">
        <div className=" z-50 border-2 bg-white ">
          <p className=" text-opionalColor/50 ">Sort by</p>
          <button
            className=" flex justify-between items-center text-base font-bold w-full "
            onClick={() => setDropdown((priValue) => (!priValue))}
            type="button"
          >
            <p  >{sortitem}</p>
            <div>
              <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
            </div>
          </button>
        </div>
        {/* // dropdownInformation */}
        <div className={` -z-10 absolute border-2  left-0  bg-white  rounded-lg shadow w-full text-opionalColor `}>
          <ul className="py-2 text-sm text-opionalColor ">
            {sortlist.map((item: string) => (
              <li
                key={item}
                onClick={() => sortFunc(item)}
                className="block px-4 cursor-pointer py-2 hover:bg-gray-100  dark:hover:bg-primaryColor dark:hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default BestSeller;