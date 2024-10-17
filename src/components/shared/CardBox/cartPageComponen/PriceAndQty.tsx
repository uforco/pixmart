import React from 'react';
import  HeadingPrimary  from '@/components/shared/headline/HeadingPrimary';

const PriceAndQty = ({
  price,
  qty,
  licence,
}: {
  price: string;
  qty: string;
  licence: string;
}) => {
  return (
    <div className=" h-[84px] flex justify-between items-end ">
      <div className=" flex items-center  gap-3 ">
        <div className=" h-full flex flex-col justify-between gap-3 ">
          <HeadingPrimary className=" font-bold ">License Type</HeadingPrimary>
          <select
            name={licence}
            className=" w-[224px] h-12 rounded-md px-2 "
            defaultValue={licence}
            id=""
          >
            <option value="Extended License">Standard License</option>
            <option value="Extended License">Extended License</option>
          </select>
        </div>
        <div className=" h-full flex flex-col justify-between gap-3 ">
          <HeadingPrimary className=" font-bold ">Qty</HeadingPrimary>
          <div className=" flex items-center rounded-md justify-around w-[119px] h-12 border  ">
            <button className=" font-bold ">-</button>
            <p>{qty}</p>
            <button className=" font-bold ">+</button>
          </div>
        </div>
      </div>
      <p className="text-2xl text-primaryColor font-bold plusJakartaSans ">
        ${price}
      </p>
    </div>
  );
};

export default PriceAndQty;