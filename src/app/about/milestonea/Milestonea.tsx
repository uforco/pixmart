import React from 'react';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoRocketOutline } from "react-icons/io5";
import { GrShieldSecurity } from "react-icons/gr";
const Milestonea = () => {

    const jcdata = [
      {
        title: "First launch with 100 creators.",
        scope: "15"
      },
      {
        title: "Reached 50,000 users.",
        scope: "17"
      },
      {
        title: "Expanded Asset Varieties.",
        scope: "19"
      },
      {
        title: "Hit 1 Million+ Download.",
        scope: "21"
      },
    ];
    return (
      <div className=" milestonea ">
        <Container>
          <div>
            <div className=" flex justify-between items-end ">
              <div>
                <h1 className=" text-primaryColor mb-8 ">MILESTONES</h1>
                <HeadingPrimary className=" text-5xl w-[437px] leading-tight ">
                  Our Journey to <br /> The Best Company
                </HeadingPrimary>
              </div>
              <div className=" flex justify-center items-center gap-6 ">
                <button className=" flex justify-center text-2xl items-center size-14 hover:bg-primaryColor/30 text-primaryColor rounded-full shadow-2xl shadow-primaryColor/40 ">
                  <IoIosArrowBack></IoIosArrowBack>
                </button>
                <button className=" flex justify-center text-2xl items-center size-14 hover:bg-primaryColor/10 text-primaryColor rounded-full hover:shadow-none shadow-2xl shadow-primaryColor/40 ">
                  <IoIosArrowForward></IoIosArrowForward>
                </button>
              </div>
            </div>
            <div>
              <div className=" flex justify-between items-center  ml-40 overflow-hidden mt-16 ">
                {jcdata?.map((item) => (
                  <div
                    key={item?.title}
                    className=" w-[266px] h-[248px] bg-secondaryColor p-5 flex flex-col justify-between rounded-xl "
                  >
                    <HeadingPrimary className=" text-[28px] ">
                      {item?.title}
                    </HeadingPrimary>
                    <p className=" text-right text-6xl font-bold text-primaryColor ">
                      &lsquo;{item?.scope}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className=" flex justify-between my-[120px] ">
            <div className=" w-1/2 relative ">
              <div className=" w-[594px] flex flex-col gap-3 ">
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
              <div className="radiabg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[170%] rounded-full w-[80%]  "></div>
              <div></div>
            </div>
            <div className=" w-1/2 flex justify-end items-center ">
              <div>
                <h2 className=" text-primaryColor libreFranklin mb-3 ">
                  VALUES
                </h2>
                <HeadingPrimary className=" text-5xl w-[527px] leading-tight mb-4 ">
                  Guide Your Experience to Digital Excellence
                </HeadingPrimary>
                <p className=' text-xl w-[569px] text-opionalColor/70 ' >
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

export default Milestonea;