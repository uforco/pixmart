import BlogCard from "@/components/shared/CardBox/bolgCard/BlogCard";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import {
    faChevronDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReadLatestDesign = () => {

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
    <div className=" py-16 ">
      <Container>
        <div className=" flex justify-between items-end mb-8 ">
          <div>
            <HeadingPrimary className=" text-5xl font-bold plusJakartaSans w-[353px] ">
              Read Latest Design Insights
            </HeadingPrimary>
          </div>
          <div className=" z-50 w-[305px] h-full ">
            <p className="pl-3">Category</p>
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
                  <option className="m-3" key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className=" grid-cols-3 grid gap-5 ">
          <BlogCard
            badgePosition=" right-3 top-3  "
            className=" bg-white p-2 "
            imageSize=""
          ></BlogCard>
          <BlogCard
            badgePosition=" right-3 top-3  "
            className=" bg-white p-2 "
            imageSize=""
          ></BlogCard>
          <BlogCard
            badgePosition=" right-3 top-3  "
            className=" bg-white p-2 "
            imageSize=""
          ></BlogCard>
          <BlogCard
            badgePosition=" right-3 top-3  "
            className=" bg-white p-2 "
            imageSize=""
          ></BlogCard>
          <BlogCard
            badgePosition=" right-3 top-3  "
            className=" bg-white p-2 "
            imageSize=""
          ></BlogCard>
          <BlogCard
            badgePosition=" right-3 top-3  "
            className=" bg-white p-2 "
            imageSize=""
          ></BlogCard>
        </div>
        <div className=" flex justify-between items-center gap-4 pt-16 mb-[120px] ">
          <button className=" group flex justify-center items-center transition-all w-14 h-14 rounded-ful ">
            <FontAwesomeIcon
              className=" group-hover:text-primaryColor text-opionalColor  transition-all   w-6 h-6 "
              icon={faChevronLeft}
            />
          </button>
          <ul className=" flex justify-center items-center gap-2 ">
            <li className=" w-4 h-4 rounded-full bg-primaryColor "></li>
            <li className=" w-4 h-4 rounded-full bg-gray-300 "></li>
            <li className=" w-4 h-4 rounded-full bg-gray-300 "></li>
          </ul>
          <button className=" group flex justify-center items-center transition-all w-14 h-14 rounded-ful ">
            <FontAwesomeIcon
              className=" group-hover:text-primaryColor text-opionalColor  transition-all   w-6 h-6 "
              icon={faChevronRight}
            />
          </button>
        </div>
      </Container>
    </div>
  );
};


export default ReadLatestDesign;
