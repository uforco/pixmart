import React, { FC } from 'react';
import HeadingPrimary from '../headline/HeadingPrimary';
import { FiCheck } from 'react-icons/fi';
import PrimaryBtn from '../button/PrimaryBtn';


export type PricingCardDataType = {
    membership: string;
    badge?: string;
    price: string;
    services: string[];
  }

interface PropsDataType {
    className: string,
    priceInfo: PricingCardDataType
}


const PricingCard: FC<PropsDataType> = ({
    className: classname,
    priceInfo,
  }) => {
    return (
      <div className=" flex justify-center w-full ">
        <div className={` ${classname} w-[400px] p-8 rounded-xl pricingCardShadow `}>
          <div className=" border-b relative ">
            {priceInfo?.badge && (
              <div className=" absolute -right-5 -top-5 uppercase px-2 py-1 rounded-full text-[10px] bg-primaryColor text-white tracking-[0.2em] ">
                {priceInfo?.badge}
              </div>
            )}
            <h1 className=" text-xl font-bold capitalize  ">
              {priceInfo?.membership}
            </h1>
            <HeadingPrimary className=" mt-4 mb-8 ">
              <span className=" text-5xl font-bold ">${priceInfo?.price}</span>
              <span className=" text-opionalColor/50 libreFranklin font-normal ">
                / Month
              </span>
            </HeadingPrimary>
          </div>
          <div className=" my-10 flex flex-col gap-4 ">
            {priceInfo?.services?.map((service: string) => (
              <p key={service} className=" flex items-center gap-2 ">
                <span className=" text-primaryColor text-xl -mb-[2px] ">
                  <FiCheck></FiCheck>
                </span>
                <span>{service}</span>
              </p>
            ))}
          </div>
          <PrimaryBtn className=" px-10 py-5 rounded-lg flex justify-center items-center w-full bg-primaryColor font-bold ">
            Get This Plan
          </PrimaryBtn>
        </div>
      </div>
    );
  };

export default PricingCard;