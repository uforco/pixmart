import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import React from 'react';
import  Image  from 'next/image';
import AuthorDetails from './authorInfo/AuthorDetails';
import ContentSection from './contentSection/ContentSection';
import RelatedArticles from './relatedArticles/RelatedArticles';

const page = () => {
    return (
      <div>
        <div className=" bg-gradient-to-b from-primaryColor/15 to-transparent ">
          <Container>
            <div className=" py-16  flex flex-col gap-2 justify-center items-start w-full ">
              <p className=" uppercase px-5 py-1 libreFranklin font-normal text-base mb-6 text-white flex justify-center items-center rounded-full plusJakartaSans h-6 bg-primaryColor ">
                TYPOGRAPHY
              </p>
              <HeadingPrimary className=" plusJakartaSans leading-tight text-6xl  ">
                Mastering the Art of Typography: <br /> Tips for Eye-Catching
                Designs for 2024
              </HeadingPrimary>
            </div>
            <div className=" h-[462px] bg-gray-300 rounded-lg mb-12 ">
              {/* <Image src={''} alt={''}></Image> */}
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className=" flex justify-between ">
              <div className=" w-[325px] overflow-hidden ">
                <AuthorDetails></AuthorDetails>
              </div>
              <div className=" w-[899px] overflow-hidden ">
                <ContentSection></ContentSection>
              </div>
            </div>
          </Container>
        </div>
        <div className=' my-[120px] ' >
            <RelatedArticles></RelatedArticles>
        </div>
      </div>
    );
};

export default page;