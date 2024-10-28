import Grid1to3Card from "@/components/shared/BlogComp/Grid1to3Card";
import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const LatestExpertDesign = () => {
  return (
    <div>
      <Container>
        <div className=" flex justify-between items-end mb-12 ">
          <HeadingPrimary className=" text-5xl w-[360px] leading-tight ">
             Latest Expert Design Insights
          </HeadingPrimary>
          <Link
            className=" flex gap-1 items-center text-primaryColor font-semibold "
            href={""}
          >
            <span>Explore Featured Works</span>
            <span className=" text-xl -mb-[2px] ">
              <IoIosArrowForward></IoIosArrowForward>
            </span>
          </Link>
        </div>
      </Container>
      <div  >
        <Grid1to3Card></Grid1to3Card>
      </div>
    </div>
  );
};

export default LatestExpertDesign;
