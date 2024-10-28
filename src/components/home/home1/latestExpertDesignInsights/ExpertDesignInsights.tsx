import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlogCard from "@/components/shared/CardBox/bolgCard/BlogCard";

const ExpertDesignInsights = () => {
  return (
    <div className=" mb-[120px] " >
      <Container>
        <div className=" flex justify-between items-end mb-12 ">
          <div>
            <h1 className=" text-primaryColor mb-1 ">BLOG</h1>
            <HeadingPrimary className=" text-5xl w-[353px] leading-tight ">
                 Latest Expert Design Insights
            </HeadingPrimary>
          </div>
          <div className=" flex justify-center items-center gap-6 ">
            <button className=" flex justify-center text-2xl items-center size-14 hover:bg-primaryColor/20 text-primaryColor rounded-full shadow-2xl shadow-primaryColor/40 ">
              <IoIosArrowBack></IoIosArrowBack>
            </button>
            <button className=" flex justify-center text-2xl items-center size-14 hover:bg-primaryColor/20 text-primaryColor rounded-full hover:shadow-none shadow-2xl shadow-primaryColor/40 ">
              <IoIosArrowForward></IoIosArrowForward>
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-4 " >
            <BlogCard className=" h-[384px] shadow-sm " ></BlogCard>
            <BlogCard className=" h-[384px] shadow-sm " ></BlogCard>
            <BlogCard className=" h-[384px] shadow-sm " ></BlogCard>
            <BlogCard className=" h-[384px] shadow-sm " ></BlogCard>
        </div>
      </Container>
    </div>
  );
};

export default ExpertDesignInsights;
