import React from 'react';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';

const BlogCard = ({
  badgePosition,
  className: classname,
  imageSize,
  headlineStyles,
}: {
  badgePosition?: string;
  className?: string;
  imageSize?: string;
  headlineStyles?: string;
}) => {
  return (
    <div className=" w-full flex justify-center items-center  ">
      <div
        className={` ${classname}  flex flex-col w-[413px] h-[440px] p-5 justify-between items-center rounded-lg shadow-lg overflow-hidden `}
      >
        <div
          className={` relative ${imageSize}  rounded-lg bg-slate-200 h-[272px] w-full `}
        >
          <span
            className={` absolute ${
              badgePosition ? badgePosition : "top-2 right-2"
            }  p-1 px-5 uppercase rounded-full text-white bg-primaryColor libreFranklin `}
          >
            ux designer
          </span>
          {/* image url */}
        </div>
        <div className=" w-full ">
          <div className=" w-full ">
            <div>
              <HeadingPrimary
                className={` ${headlineStyles} text-xl font-bold plusJakartaSans `}
              >
                Unlocking New Creativity: Essential Upcoming Design Apps for
                2024
              </HeadingPrimary>
            </div>
            <div>
              <p className=" text-opionalColor/50 libreFranklin mt-3 ">
                5 APRIL 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;