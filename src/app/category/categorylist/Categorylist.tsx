import React from 'react';
import TopFiltersection from './../filtersec/TopFiltersection';
import ProductCard from '@/components/shared/CardBox/ProductCard';

const Categorylist = () => {
    return (
      <div className=' w-full ' >
        <TopFiltersection></TopFiltersection>
        <div className=" w-full grid grid-cols-3 gap-7 ">
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
          <ProductCard className=' w-[320px] ' ></ProductCard>
        </div>
      </div>
    );
};

export default Categorylist;

