import React from 'react';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';

const Awards = () => {
    return (
      <div className=' bg-white ' >
        <Container>
          <div className=" flex justify-between my-[120px] ">
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
                <div className=' w-[549px] h-[428px] rounded-xl bg-secondaryColor  ' >

                </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Awards;