import React, { FC } from 'react';
import  HeadingPrimary  from '@/components/shared/headline/HeadingPrimary';
import PriceAndQty from './PriceAndQty';
// import Image from 'next/image';


interface cartdatatype {
  cartdata: {
    name: string;
    category: string;
    price: string;
    qty: string;
    licence_type: string;
  };
  inx: number;
  lastinx: number;
}

const CartFromProductCard: FC<cartdatatype> = ({ cartdata, inx, lastinx }) => {
  console.log(inx, lastinx);
  return (
    <div className={`${inx === lastinx - 1 ? "border-b-0" : "border-b"} `}>
      <div
        className={` flex items-center justify-between h-[190px] overflow-hidden rounded my-12 ${
          inx === 0 ? "mt-0" : ""
        } `}
      >
        <div className=" w-[224px] h-full rounded-lg bg-gray-300 overflow-hidden ">
          {/* <Image src={""} alt={""}></Image> */}
        </div>
        <div className=" w-[574px] flex flex-col justify-between h-full overflow-hidden ">
          <div className=" w-full flex justify-between ">
            <div>
              <HeadingPrimary className=" text-2xl ">
                {cartdata?.name}
              </HeadingPrimary>
              <p className=" text-opionalColor/50 text-xl ">
                {cartdata?.category}
              </p>
            </div>
            <div>
              <button className=" underline ">Remove</button>
            </div>
          </div>
          <PriceAndQty
            price={cartdata?.price}
            qty={cartdata?.qty}
            licence={cartdata?.licence_type}
          ></PriceAndQty>
        </div>
      </div>
    </div>
  );
};

export default CartFromProductCard;