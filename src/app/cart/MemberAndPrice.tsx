'use client'
import React, { ChangeEvent, useState } from 'react';
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import CouponCode from './CouponCode';
import PrimaryBtn from '@/components/shared/button/PrimaryBtn';

const MemberAndPrice = ({ Regularprice }: { Regularprice: number}) => {
  const [priceOffer, setPriceOffer] = useState<boolean>(true)
  const [subTotal, setSubTotal] = useState<number>(Regularprice);
  const [Total, setTotal] = useState<number>(subTotal);

  let Membership10Off: number = Regularprice - (Regularprice / 100) * 10;

  function checked(event?: ChangeEvent<HTMLInputElement>): void {
    // setPriceOffer((preValue) => !preValue);
  }
  function seletePrice (price: number) {
    if (price.toFixed(2) === Membership10Off.toFixed(2)){
        setPriceOffer(false);
        setSubTotal(parseFloat(price.toFixed(2)));
        setTotal(parseFloat(price.toFixed(2)));
    }else{
        setPriceOffer(true);
        setSubTotal(parseFloat(price.toFixed(2)));
        setTotal(parseFloat(price.toFixed(2)));
    }
  }

  return (
    <div
      className=" w-full px-7 pt-6 pb-8 shadow-xl shadow-opionalColor/10
              rounded-lg "
      style={{
        boxShadow:
          " 0px 10px 20px 0px rgb(0 0 0 / 2%), 0px 5px 20px 6px rgb(0 0 0 / 5%)",
      }}
    >
      <div>
        <HeadingPrimary>Membership Promotion</HeadingPrimary>
        <p>
          Choose our membership for 10% discount in every purchase, or continue
          without our membership for regular pricing in payment.
        </p>
      </div>
      <div className=" border-b pb-6 mb-6 ">
        <div
          className={` flex justify-between items-center mt-5 cursor-pointer ${
            priceOffer ? "border-primaryColor " : " "
          } border rounded-lg p-1 px-3 `}
          onClick={() => seletePrice(Regularprice)}
        >
          <div className="flex items-center my-2 libreFranklin text-base ">
            <input
              type="checkbox"
              checked={priceOffer}
              onChange={checked}
              className="w-4 h-4 text-primaryColor bg-gray-100 cursor-pointer rounded "
            ></input>
            <label
              className={` libreFranklin cursor-pointer font-bold ms-2 text-sm text-opionalColor tracking-wide`}
            >
              Regular Price
            </label>
          </div>
          <p className=" libreFranklin ">${Regularprice.toFixed(2)}</p>
        </div>
        <div
          className={` flex justify-between items-center cursor-pointer ${
            priceOffer ? "" : " border-primaryColor "
          } border rounded-lg p-1 px-3 my-2 `}
          onClick={() => seletePrice(Membership10Off)}
        >
          <div className="flex items-center my-2 libreFranklin text-base ">
            <input
              type="checkbox"
              checked={priceOffer === false ? true : false}
              onChange={checked}
              className="w-4 h-4 text-primaryColor bg-gray-100 cursor-pointer rounded "
            ></input>
            <label
              className={` libreFranklin cursor-pointer font-bold ms-2 text-sm text-opionalColor tracking-wide`}
            >
              Membership {"(10% Off)"}
            </label>
          </div>
          <p className=" libreFranklin ">${Membership10Off.toFixed(2)}</p>
        </div>
        <div className=" flex justify-between items-center ">
          <p className=" text-base text-opionalColor/80 ">Sub Total</p>
          <p className=" font-bold ">${subTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className=" border-b pb-6 mb-6 ">
        <CouponCode setfuncTotal={setTotal}></CouponCode>
      </div>
      <div className=" flex justify-between items-center pb-6 ">
        <p className=" text-base text-opionalColor/80 ">Total</p>
        <p className=" font-bold ">${Total.toFixed(2)}</p>
      </div>
      <div>
        <PrimaryBtn className=" w-full h-12 rounded-lg ">
          Proceed to Checkout
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default MemberAndPrice;