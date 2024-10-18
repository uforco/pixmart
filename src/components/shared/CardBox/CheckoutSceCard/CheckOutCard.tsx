import React from 'react';
import HeadingPrimary from '../../headline/HeadingPrimary';

const CheckOutCard = ({ data, inx }: { data: any, inx: number }) => {
  return (
    <div className={inx === 0? "" :` border-t my-4 pt-4 `}>
      <div className=" flex items-center justify-between overflow-hidden ">
        <div className=" w-[119px] h-[104px] rounded-lg bg-gray-300 "></div>
        <div className=" flex flex-col justify-between h-full w-[306px] gap-5 overflow-hidden ">
          <div>
            <HeadingPrimary className=" text-xl font-bold  ">
              {data?.name}
            </HeadingPrimary>
          </div>
          <div className=" flex justify-between ">
            <div className=" flex justify-start items-center gap-2 text-opionalColor/50 ">
              <span>x{data?.qty}</span>
              <span>|</span>
              <span>{data?.licence_type}</span>
            </div>
            <p>${data?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCard;