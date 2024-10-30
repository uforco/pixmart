import React from 'react';
import Container from '../Container';
import BlogCard from '../CardBox/bolgCard/BlogCard';

const Grid1to3Card = () => {
    return (
        <div className='  mb-[120px] ' >
          <Container>
            <div >
              <div className=" grid grid-cols-12 grid-rows-12 gap-4  ">
                <div className="  col-span-7  row-span-12">
                  <BlogCard
                    badgePosition=" right-3 top-3  "
                    className=" bg-white  w-full h-[780px] p-[8px] shadow-none "
                    imageSize=" h-[680px] "
                    headlineStyles=" text-[28px] "
                  ></BlogCard>
                </div> 
                <div className="  col-span-5 row-span-6  ">
                  <BlogCard
                    badgePosition=" right-3 top-3  "
                    className=" bg-white w-full h-[395px] p-[8px] shadow-none  "
                    imageSize=" h-[270px]"
                    headlineStyles=" text-[20px] mt-3 "
                  ></BlogCard>
                </div>
                <div className="  col-span-5 row-span-6 ">
                  <BlogCard
                    badgePosition=" right-3 top-3  "
                    className=" bg-white w-full h-[395px] p-[8px] shadow-none "
                    imageSize=" h-[270px]"
                    headlineStyles=" text-[20px] mt-3 "
                  ></BlogCard>
                </div>
              </div>
            </div>
          </Container>
        </div>
    );
};

export default Grid1to3Card;