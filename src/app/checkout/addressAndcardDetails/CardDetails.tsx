import React from 'react';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import Image  from 'next/image';
import creaditcard from "@/../../public/images/crediticon.png"
import pypal from "@/../../public/images/pypal.png";
import AppleandGooglePay from "@/../../public/images/payforAG.png";

const CardDetails = () => {
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
                  //   onChange={checked}
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
                  type="text"
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
        <div
          className={` flex mt-3 justify-between items-center border cursor-pointer rounded-lg p-1 px-3 `}
          //   onClick={() => seletePrice(Regularprice)}
        >
          <div className="flex items-center my-2 libreFranklin text-base ">
            <input
              type="checkbox"
              name="paypal"
              //   checked={priceOffer}
              //   onChange={checked}
              className="w-4 h-4 border text-primaryColor bg-gray-100 cursor-pointer rounded "
            ></input>
            <label
              className={` plusJakartaSans cursor-pointer font-bold ms-2 text-[20px] text-opionalColor tracking-wide`}
            >
              PayPal
            </label>
          </div>
          <p className=" libreFranklin ">
            <Image
            //   width={90}
            //   height={24}
              src={pypal}
              alt={"crediticon"}
            ></Image>
          </p>
        </div>
        <div
          className={` flex mt-3 justify-between items-center border cursor-pointer rounded-lg p-1 px-3 `}
          //   onClick={() => seletePrice(Regularprice)}
        >
          <div className="flex items-center my-2 libreFranklin text-base ">
            <input
              type="checkbox"
              name="AppleandGooglePay"
              //   checked={priceOffer}
              //   onChange={checked}
              className="w-4 h-4 border text-primaryColor bg-gray-100 cursor-pointer rounded "
            ></input>
            <label
              className={` plusJakartaSans cursor-pointer font-bold ms-2 text-[20px] text-opionalColor tracking-wide`}
            >
              Apple Pay / Google Pay
            </label>
          </div>
          <p className=" libreFranklin ">
            <Image
            //   width={90}
            //   height={24}
              src={AppleandGooglePay}
              alt={"Apple and Google Pay"}
            ></Image>
          </p>
        </div>
      </div>
    );
};

export default CardDetails;