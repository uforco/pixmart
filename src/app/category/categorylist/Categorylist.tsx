import React from 'react';
import ItemCard from './ItemCard';
import TopFiltersection from './../filtersec/TopFiltersection';

const Categorylist = () => {
    return (
      <div>
        <TopFiltersection></TopFiltersection>
        <div className=" w-full grid grid-cols-3 gap-7 ">
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
        </div>
      </div>
    );
};

export default Categorylist;

