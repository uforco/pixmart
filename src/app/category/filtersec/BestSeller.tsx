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
        setDropdown((priValue) => !priValue);
    }

    return (
      <div className=" z-50 relative w-[180px] ">
        <div className=" btnheight z-50 bg-white ">
          <button
            onClick={() => setDropdown((priValue) => !priValue)}
            type="button"
            className='w-full'
          >
            <p className=" text-opionalColor/50 w-full text-left ">Sort by</p>
            <div className=" flex justify-between items-center text-base font-bold w-full ">
              <p>{sortitem}</p>
              <div
                className={` text-primaryColor transition-all duration-500 ${
                  dropdown ? "rotate-90" : `rotate-0`
                }  `}
              >
                <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
              </div>
            </div>
          </button>
        </div>
        {/* // dropdownInformation */}
        <div
          className={` dropdownmanu ${
            dropdown ? "top-[50px]" : `-top-[244px]`
          }  -z-10 absolute left-0  transition-all duration-500 bg-white  rounded-lg shadow w-full text-opionalColor overflow-hidden `}
        >
          <ul className=" text-sm text-opionalColor ">
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