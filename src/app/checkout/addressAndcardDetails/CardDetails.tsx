'use client'
import React, { useState } from 'react';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import Image  from 'next/image';
import creaditcard from "@/../../public/images/crediticon.png"
import pypal from "@/../../public/images/pypal.png";
import AppleandGooglePay from "@/../../public/images/payforAG.png";

const CardDetails = () => {


  const [cartOn, setCartOn]= useState<boolean>(false)


  function checkeds (e: any): void {
      setCartOn(e?.target?.checked);
  }

    return (
      <div>
        <HeadingPrimary className=" plusJakartaSans text-[28px] font-bold ">
          Payment Method
        </HeadingPrimary>
        <div className=" mt-5 py-6 w-full border rounded-lg border-primaryColor flex justify-center items-center ">
          <div className=" w-[659px] overflow-hidden  ">
            <div
              className={` flex justify-between items-center cursor-pointer rounded-lg p-1 px-3 `}
              //   onClick={() => seletePrice(Regularprice)}
            >
              <div className="flex items-center my-2 libreFranklin text-base ">
                <input
                  type="checkbox"
                  //   checked={priceOffer}
                  onChange={checkeds}
                  className="w-4 h-4 text-primaryColor bg-gray-100 cursor-pointer rounded "
                ></input>
                <label
                  className={` plusJakartaSans cursor-pointer font-bold ms-2 text-[20px] text-opionalColor tracking-wide`}
                >
                  Credit / Debit Card
                </label>
              </div>
              <p className=" libreFranklin ">
                <Image
                  width={200}
                  height={24}
                  src={creaditcard}
                  alt={"crediticon"}
                ></Image>
              </p>
            </div>
            <div>
              <div className="relative w-fill ">
                <input
                  disabled={!cartOn}
                  type="number"
                  id="creditCardNumber"
                  name="creditCardNumber"
                  className={`block my-4 w-full border rounded-lg libreFranklin px-4 text-base  focus:outline-0  h-[62px]`}
                  placeholder="Credit Card Number"
                  required
                />
              </div>
            </div>
            <div className=" flex justify-between gap-5 ">
              <div className="relative w-full ">
                <label
                  className=" text-base font-bold plusJakartaSans"
                  htmlFor="expirationDate"
                >
                  Expiration Date
                </label>
                <input
                  disabled={!cartOn}
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  className={`block my-4 w-full border rounded-lg libreFranklin px-4 text-base  focus:outline-0  h-[62px]`}
                  placeholder="MM/YYYY"
                  required
                />
              </div>
              <div className="relative w-full ">
                <label
                  className=" text-base font-bold plusJakartaSans"
                  htmlFor="CVV"
                >
                  CVV
                </label>
                <input
                  disabled={!cartOn}
                  type="number"
                  id="CVV"
                  name="CVV"
                  className={`block my-4 w-full border rounded-lg libreFranklin px-4 text-base  focus:outline-0  h-[62px]`}
                  placeholder="000"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="radioss pt-5">
          <div className="flex items-center my-2 p-4 justify-between rounded-lg border libreFranklin text-base w-full ">
            <div>
              <input
                type="radio"
                id="AppleGooglePay"
                name="paymentMathod"
                value="AppleGooglePay"
              ></input>
              <label
                className="plusJakartaSans text-xl font-bold  "
                htmlFor="AppleGooglePay"
              >
                Apple Pay / Google Pay
              </label>
            </div>
            <p className=" libreFranklin ">
              <Image
                src={AppleandGooglePay}
                alt={"Apple and Google Pay"}
              ></Image>
            </p>
          </div>
          <div className="flex items-center my-2 p-4 justify-between rounded-lg border libreFranklin text-base w-full ">
            <div>
              <input
                type="radio"
                id="paypal"
                name="paymentMathod"
                value="paypal"
              ></input>
              <label
                className="plusJakartaSans text-xl font-bold "
                htmlFor="paypal"
              >
                PayPal
              </label>
            </div>
            <p className=" libreFranklin ">
              <Image src={pypal} alt={"paypal"}></Image>
            </p>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;