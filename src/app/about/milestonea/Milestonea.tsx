import React from 'react';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
      </div>
    );
};

export default Milestonea;