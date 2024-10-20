import React from 'react';
import HeadingPrimary  from '@/components/shared/headline/HeadingPrimary';

const AuthorDetails = () => {


    const categorys = [
      "Graphic Design Trends",
      "Typography & Fonts",
      "UI/UX Design",
      "Branding & Identity",
      "Illustration",
      "Digital Marketing",
    ];

    return (
      <div className=" w-full ">
        <div className=" flex items-center justify-start gap-[18px] pb-10 border-b-2 border-opionalColor ">
          <div className=" w-[60px] h-[60px] flex justify-center items-center rounded-full overflow-hidden bg-gray-300 ">
            {/* imgae */}
          </div>
          <div className=" flex flex-col justify-between items-start ">
            <HeadingPrimary className=" font-bold text-xl ">
              Emma Clarke
            </HeadingPrimary>
            <p className=" text-base libreFranklin text-opionalColor/50 ">
              April 10, 2024
            </p>
          </div>
        </div>
        <div className=" border-b-2 border-opionalColor ">
          <ul className=" list-disc ml-5 marker:text-primaryColor py-10 ">
            {categorys.map((item) =>
              item.includes("Typography") ? (
                <li className=" ml-6 my-3 font-bold " key={item}>
                  {item}
                </li>
              ) : (
                <li className=" my-3 text-opionalColor/50 " key={item}>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div className=" pt-10 ">
          <HeadingPrimary className=" text-2xl mb-8 ">
            Latest Articles
          </HeadingPrimary>
          <div className=' pb-6 border-b border-opionalColor/50 ' >
            <h2 className=" text-xl font-bold mb-2">
              2024’s Top Graphic Design Trends: What’s Shaping the Future of
              Design?
            </h2>
            <p>March 15, 2024</p>
          </div>
          <div className=' py-6 ' >
            <h2 className=" text-xl font-bold mb-2">
              2024’s Top Graphic Design Trends: What’s Shaping the Future of
              Design?
            </h2>
            <p>March 15, 2024</p>
          </div>
        </div>
      </div>
    );
};

export default AuthorDetails;