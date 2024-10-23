import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import React from 'react';
import { IoMdPlay } from 'react-icons/io';

const AboutInfo = () => {
    return (
      <div className=" my-[120px] ">
        <div className=" mb-[120px] ">
          <Container>
            <HeadingPrimary className=" uppercase text-primaryColor libreFranklin ">
              About
            </HeadingPrimary>
            <div className=" flex justify-between gap-10 mt-8 ">
              <div className=" w-1/2 ">
                <HeadingPrimary className=" text-5xl text-opionalColor mb-[160px] w-[600px] leading-[1.3] ">
                  At the heart of Pixmart lies a story of creativity,
                  innovation, and community.
                </HeadingPrimary>
                <div>
                  <button className=" flex items-center gap-2 ">
                    <span className=" text-primaryColor text-[24px] -mt-[2px] ">
                      <IoMdPlay></IoMdPlay>
                    </span>
                    <span className=" font-bold libreFranklin ">
                      Watch About Us
                    </span>
                  </button>
                </div>
              </div>
              <div className=" w-1/2 libreFranklin text-opionalColor/50 flex justify-end ">
                <div className=" w-[620px] text-xl ">
                  <p className=" mb-8 leading-normal ">
                    Founded in a small, vibrant studio, PixMart was born from a
                    simple idea: to create a digital marketplace that not only
                    serves as a platform for buying and selling but also
                    nurtures the creative spirit within each of us. Our journey
                    began with a team of passionate designers, developers, and
                    artists who envisioned a space where creators could freely
                    share their work and find the tools they needed to bring
                    their visions to life. As we grew, so did our community.
                  </p>
                  <p className=" mb-8 leading-normal ">
                    Today, PixelMart is more than just a marketplace; it's a
                    global network of creative minds connected by their love for
                    design and innovation. Each product on PixelMart is
                    carefully curated to ensure quality and originality,
                    offering our customers access to a diverse range of digital
                    assets.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className=" bg-primaryColor ">
          <Container>
            <div className=" flex justify-between items-center text-white py-14  ">
              <div className=" flex flex-col gap-1 items-center">
                <HeadingPrimary className=" text-white text-5xl ">
                  200+
                </HeadingPrimary>
                <p className=" libreFranklin ">Unique Assets</p>
              </div>
              <div className=" flex flex-col gap-1 items-center">
                <HeadingPrimary className=" text-white text-5xl ">
                  5K+
                </HeadingPrimary>
                <p className=" libreFranklin ">Creators Joined</p>
              </div>
              <div className=" flex flex-col gap-1 items-center">
                <HeadingPrimary className=" text-white text-5xl ">
                  1M+
                </HeadingPrimary>
                <p className=" libreFranklin ">Assets Downloaded</p>
              </div>
              <div className=" flex flex-col gap-1 items-center">
                <HeadingPrimary className=" text-white text-5xl ">
                  99%
                </HeadingPrimary>
                <p className=" libreFranklin ">Customers Satisfaction</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
};

export default AboutInfo;