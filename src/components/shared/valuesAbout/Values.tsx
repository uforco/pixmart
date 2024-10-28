import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import React from 'react';
import { LiaCertificateSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoRocketOutline } from "react-icons/io5";
import { GrShieldSecurity } from "react-icons/gr";

const Values = ({className: classname, valueClass}: {className?: string, valueClass?: string}) => {
    return (
      <div>
        <Container>
          <div className={`${classname} flex justify-between my-[120px] `}>
            <div className=" w-1/2 relative ">
              <div className=" w-[594px] flex flex-col gap-5 ">
                <div className=" w-full h-[106px] p-6 bg-white z-30 rounded-lg shadow-xl shadow-slate-200/50 flex gap-6 items-center ">
                  <div className=" w-14 h-14 rounded-lg bg-primaryColor text-white flex justify-center items-center text-5xl ">
                    <LiaCertificateSolid></LiaCertificateSolid>
                  </div>
                  <div>
                    <HeadingPrimary className=" text-xl font-bold mb-1 ">
                      Quality First
                    </HeadingPrimary>
                    <p className=" text-opionalColor/80 ">
                      Only the highest quality digital products.
                    </p>
                  </div>
                </div>
                <div className=" w-full h-[106px] p-6 bg-white z-30 rounded-lg shadow-xl shadow-slate-200/50 flex gap-6 items-center ">
                  <div className=" w-14 h-14 rounded-lg bg-primaryColor text-white flex justify-center items-center text-5xl p-3 ">
                    <TfiHeadphoneAlt></TfiHeadphoneAlt>
                  </div>
                  <div>
                    <HeadingPrimary className=" text-xl font-bold mb-1 ">
                      Customer Support
                    </HeadingPrimary>
                    <p className=" text-opionalColor/80 ">
                      We have customer live 24/7 assistance for your needs.
                    </p>
                  </div>
                </div>
                <div className=" w-full h-[106px] p-6 bg-white z-30 rounded-lg shadow-xl shadow-slate-200/50 flex gap-6 items-center ">
                  <div className=" w-14 h-14 rounded-lg bg-primaryColor text-white flex justify-center items-center text-5xl p-3 ">
                    <IoRocketOutline></IoRocketOutline>
                  </div>
                  <div>
                    <HeadingPrimary className=" text-xl font-bold mb-1 ">
                      Innovation Hub
                    </HeadingPrimary>
                    <p className=" text-opionalColor/80 ">
                      A platform for cutting-edge creative digital products.
                    </p>
                  </div>
                </div>
                <div className=" w-full h-[106px] p-6 bg-white z-30 rounded-lg shadow-xl shadow-slate-200/50 flex gap-6 items-center ">
                  <div className=" w-14 h-14 rounded-lg bg-primaryColor text-white flex justify-center items-center text-5xl p-3 ">
                    <GrShieldSecurity></GrShieldSecurity>
                  </div>
                  <div>
                    <HeadingPrimary className=" text-xl font-bold mb-1 ">
                      Secure Shopping
                    </HeadingPrimary>
                    <p className=" text-opionalColor/80 ">
                      We guarantee safety and privacy for every purchase
                      process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="radiabg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[190%] rounded-full w-[80%]  "></div>
            </div>
            <div className={` ${valueClass} w-1/2 flex  items-center  `}>
              <div>
                <h2 className=" text-primaryColor libreFranklin mb-3 ">
                  VALUES
                </h2>
                <HeadingPrimary className=" text-5xl w-[527px] leading-tight mb-4 ">
                  Guide Your Experience to Digital Excellence
                </HeadingPrimary>
                <p className=" text-xl w-[569px] text-opionalColor/70 ">
                  Unlock unparalleled access to premium digital design assets at
                  unbeatable prices, maximizing your creative process.
                </p>
              </div>
            </div>
          </div>
        </Container>   
      </div>
    );
};

export default Values;