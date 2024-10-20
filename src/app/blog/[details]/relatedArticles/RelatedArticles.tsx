import BlogCard from "@/components/shared/CardBox/bolgCard/BlogCard";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import Link from "next/link";

const RelatedArticles = () => {
  return (
    <div className=" bg-primaryColor/5 py-24 ">
      <Container>
        <div className=" flex justify-between items-end mb-8 ">
          <div>
            <HeadingPrimary className=" text-5xl font-bold plusJakartaSans ">
              Related Articles
            </HeadingPrimary>
          </div>
          <div className=" flex  ">
            <Link
              href={""}
              className=" group flex gap-2 font-bold  justify-center text-primaryColor items-center transition-all rounded-full "
            >
              <span>Explore All Articles</span>

              <IoIosArrowForward className=" fa-light transition-all  text-primaryColor text-xl "></IoIosArrowForward>
            </Link>
          </div>
        </div>
        {/* TODO : use slider */}
        <div className=" grid-cols-3 grid ">
          <BlogCard
            badgePosition=" left-3 -bottom-3  "
            className=" bg-white "
            imageSize=""
          ></BlogCard>
          <BlogCard
            badgePosition=" left-3 -bottom-3  "
            className=" bg-white  "
            imageSize=""
          ></BlogCard>
          <BlogCard
            badgePosition=" left-3 -bottom-3  "
            className=" bg-white  "
            imageSize=""
          ></BlogCard>
        </div>
      </Container>
    </div>
  );
};

export default RelatedArticles;
