import { plusJakartaSans } from "@/app/layout";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import React from "react";
import FilterItemSection from "./FilterItemSection";
import PriceFilter from './../pricefilter/PriceFilter';
// className={plusJakartaSans.className}

const FilterSection = () => {
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
  const formatType = [
    "All Formats",
    "Figma",
    "Sketch",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustration",
    "Others",
  ];
  const style = [
    "All Styles",
    "Minimalist",
    "Modern",
    "Playful",
    "Dark Mode",
    "Photocentric",
    "Others",
  ];

  return (
    <div className=" w-[217px] pr-8 ">
      <div>
        <HeadingPrimary className=" leading-tight text-2xl ">
          Categories
        </HeadingPrimary>
        <FilterItemSection filterItems={categoryItems}></FilterItemSection>
      </div>
      {/* <div>
        <HeadingPrimary className=" leading-tight text-2xl ">
          Format Type
        </HeadingPrimary>
        <FilterItemSection filterItems={formatType}></FilterItemSection>
      </div>
      <div>
        <HeadingPrimary className=" leading-tight text-2xl ">
          Style
        </HeadingPrimary>
        <FilterItemSection filterItems={style}></FilterItemSection>
      </div>
      <div>
        <HeadingPrimary className=" leading-tight text-2xl ">
          Price
        </HeadingPrimary>
        <PriceFilter></PriceFilter>
      </div> */}
    </div>
  );
};

export default FilterSection;
