"use client";
import React from "react";
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const CategorySelector = () => {
const categoryItems = [
  "All Categories",
  "Technology",
  "Travel & Tourism",
  "Health & Filness",
  "E-Commenerce",
  "Education",
  "Entertainment",
  "Others",
];

  return (
    <div className=" z-50 w-[305px] h-full ">
      <p className="pl-3" >Category</p>
      <div className=" relative w-full ">
        <label
          htmlFor="category"
          className="text-base absolute right-3 z-50 top-1/2 -translate-y-1/2 libreFranklin capitalize pl-3 "
        >
          <FontAwesomeIcon
            className=" text-primaryColor "
            icon={faChevronDown}
          />
        </label>
        <select
          id="category"
          name="category"
          className=" relative text-xl font-bold plusJakartaSans p-3 transition-all "
        >
          {categoryItems.map((item) => (
            <option className='m-3' key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySelector;
