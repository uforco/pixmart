import BlogCard from '@/components/shared/CardBox/bolgCard/BlogCard';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FeaturedArticles = () => {
    return (
      <div className=" bg-primaryColor/5 py-16 ">
        <Container>
          <div className=" flex justify-between items-center mb-8 ">
            <div>
              <HeadingPrimary className=" text-5xl font-bold plusJakartaSans ">
                Featured Articles
              </HeadingPrimary>
            </div>
            <div className=" flex justify-between items-center gap-4 ">
              <button className=" group flex justify-center items-center hover:bg-primaryColor transition-all w-14 h-14 rounded-full border border-primaryColor ">
                <FontAwesomeIcon
                  className=" group-hover:text-white  transition-all  text-primaryColor w-6 h-6 "
                  icon={faChevronLeft}
                />
              </button>
              <button className=" group flex justify-center hover:bg-primaryColor items-center transition-all w-14 h-14 rounded-full border border-primaryColor ">
                <FontAwesomeIcon
                  className=" group-hover:text-white  transition-all  text-primaryColor w-6 h-6 "
                  icon={faChevronRight}
                />
              </button>
            </div>
          </div>
          {/* TODO : use slider */}
          <div className=" grid-cols-3 grid ">
            <BlogCard
              badgePosition=" left-3 -bottom-3  "
              className=" bg-white "
              imageSize=""
            ></BlogCard>
            <BlogCard
              badgePosition=" left-3 -bottom-3  "
              className=" bg-white  "
              imageSize=""
            ></BlogCard>
            <BlogCard
              badgePosition=" left-3 -bottom-3  "
              className=" bg-white  "
              imageSize=""
            ></BlogCard>
          </div>
        </Container>
      </div>
    );
};

export default FeaturedArticles;