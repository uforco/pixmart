import React from 'react';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { PiFlowerLotusLight } from "react-icons/pi";

const Awards = ({className: classname}: {className?: string}) => {
    return (
      <div className=' bg-white ' >
        <Container>
          <div className={` ${classname} flex justify-between my-[120px] `}>
            <div className=" w-2/5 flex justify-start items-center ">
              <div className=" w-[466px]  mb-12 ">
                <h1 className=" text-primaryColor tracking-widest ">AWARDS</h1>
                <HeadingPrimary className=" text-5xl w-full sm:w-[494px] leading-tight mt-3 mb-4 ">
                  Celebrating Our Excellence
                </HeadingPrimary>
                <p className=" libreFranklin text-opionalColor/80 text-xl ">
                  Discover the recognition and accolades earned by our
                  top-quality design assets, validating our design excellence
                  and reliability.
                </p>
              </div>
            </div>
            <div className=" w-3/5 ">
                <div className=' w-[549px] h-[428px] rounded-xl bg-secondaryColor relative  ' >
                    <div className=' w-full h-full ' ></div>
                    <div className=' absolute -bottom-14 -right-1/4 w-[370px] flex flex-col gap-4 ' >
                      <AbCard></AbCard>
                      <AbCard></AbCard>
                      <AbCard></AbCard>
                    </div>
                </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Awards;

const AbCard = () => {
  return <div className='  w-full p-4 flex items-center gap-4 bg-white shadow-lg rounded-lg shadow-slate-300 ' >
  <div className=' w-[58px] h-[58px] flex justify-center items-center text-primaryColor  ' >
    <PiFlowerLotusLight className=' text-5xl ' ></PiFlowerLotusLight>
  </div>
  <div className=' flex flex-col justify-between h-[58px]  ' >
    <p className=' text-opionalColor/70 libreFranklin ' >2023</p>
    <p className=' font-bold ' >E-Commerce Innovation Award</p>
  </div>
</div>
}

