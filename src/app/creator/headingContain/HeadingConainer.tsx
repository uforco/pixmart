import React from 'react';
import Container from '@/components/shared/Container';
import  HeadingPrimary  from '@/components/shared/headline/HeadingPrimary';
import  Link  from 'next/link';
import PrimaryBtn  from '@/components/shared/button/PrimaryBtn';

const HeadingConainer = () => {
    return (
      <div>
        <Container>
          <div className=" flex h-[162px] justify-between items-center ">
            <div className="w-[563px] h-full overflow-hidden flex justify-between items-center ">
              <div className=" w-[162px] h-full overflow-hidden rounded-full bg-gray-300 "></div>
              <div className=" h-full flex flex-col justify-between ">
                <div>
                  <HeadingPrimary className=" text-5xl ">
                    Visual Vibe Arts
                  </HeadingPrimary>
                  <p className=" text-opionalColor/50 mt-2 ">
                    <Link href={""}>https://visualvibe.co</Link>{" "}
                  </p>
                </div>
                <div className=" flex items-center gap-2  ">
                  <p>
                    <span className=" text-primaryColor font-bold ">128 </span>
                    Works
                  </p>
                  <p>
                    <span className=" text-primaryColor font-bold">2345 </span>
                    Followers
                  </p>
                </div>
              </div>
            </div>
            <div className=' flex flex-col justify-between h-full ' >
              <div>
                <ul className=" flex items-center gap-2 justify-end ">
                  <li className=" w-12 h-12 hover:text-white shadow-2xl shadow-primaryColor/80 hover:bg-primaryColor cursor-pointer transition-all font-bold text-primaryColor rounded-full bg-white flex justify-center items-center ">
                    TW
                  </li>
                  <li className=" w-12 h-12 hover:text-white shadow-2xl shadow-primaryColor/80 hover:bg-primaryColor cursor-pointer transition-all font-bold text-primaryColor rounded-full bg-white flex justify-center items-center ">
                    IG
                  </li>
                  <li className=" w-12 h-12 hover:text-white shadow-2xl shadow-primaryColor/80 hover:bg-primaryColor cursor-pointer transition-all font-bold text-primaryColor rounded-full bg-white flex justify-center items-center ">
                    FB
                  </li>
                </ul>
              </div>
              <div className=" flex items-center justify-end gap-3 ">
                <PrimaryBtn className=" font-bold w-[192px] h-16 rounded-xl ">
                  Follow Creator
                </PrimaryBtn>
                <button className=" font-bold w-[192px] rounded-xl h-16 bg-primaryColor/10 text-primaryColor  ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default HeadingConainer;