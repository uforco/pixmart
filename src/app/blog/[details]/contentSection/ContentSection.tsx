import React from 'react';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import  Link  from 'next/link';

const ContentSection = () => {
    return (
      <div>
        <p className=" text-opionalColor/70 text-xl pb-8 ">
          In the vast expanse of graphic design, typography stands as a pivotal
          element that can make or break the visual appeal of any project.
          Understanding the art of typography is essential for creating designs
          that not only attract attention but also communicate effectively.
          Here, we delve into practical tips that will help you master
          typography, transforming your creations into eye-catching
          masterpieces.
        </p>
        <div className=" pb-8 ">
          <HeadingPrimary className=" plusJakartaSans text-2xl font-bold pb-4 ">
            1. Understand Typeface Selection
          </HeadingPrimary>
          <p className=" text-opionalColor/70 text-xl ">
            The choice of typeface is foundational in setting the tone of your
            design. Serif fonts, with their classic appeal, lend a touch of
            elegance and formality, making them ideal for print media and
            official documents. Sans-serif fonts, on the other hand, project a
            modern and clean look, perfect for digital platforms. When selecting
            a typeface, consider the message you wish to convey and the medium
            through which it will be communicated.
          </p>
        </div>
        <div className=" pb-8 ">
          <HeadingPrimary className=" plusJakartaSans text-2xl font-bold pb-4 ">
            1. Understand Typeface Selection
          </HeadingPrimary>
          <p className=" text-opionalColor/70 text-xl ">
            The choice of typeface is foundational in setting the tone of your
            design. Serif fonts, with their classic appeal, lend a touch of
            elegance and formality, making them ideal for print media and
            official documents. Sans-serif fonts, on the other hand, project a
            modern and clean look, perfect for digital platforms. When selecting
            a typeface, consider the message you wish to convey and the medium
            through which it will be communicated.
          </p>
          <div className=" pt-8 ">
            <div className=" w-full h-[462px] rounded-lg overflow-hidden bg-gray-200 ">
              {/* image */}
            </div>
            <div className=" w-full flex justify-between items-end text-opionalColor/70 text-xl my-2 ">
              <p>Example of font usage in typography.</p>
              <p>
                <Link
                  className=" text-primaryColor border-b-2 border-primaryColor pb-1  "
                  href={""}
                >
                  Get this asset
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className=" pb-8 ">
          <HeadingPrimary className=" plusJakartaSans text-2xl font-bold pb-4 ">
            3. Experiment with Alignment
          </HeadingPrimary>
          <p className=" text-opionalColor/70 text-xl ">
            While center and right alignments have their place, left-aligned
            text is generally the most legible and comfortable for readers,
            especially for longer passages. However, don’t shy away from
            experimenting with different alignments in headings or callouts to
            add dynamism to your layout.
          </p>
        </div>
        <div className=" pb-8 ">
          <HeadingPrimary className=" plusJakartaSans text-2xl font-bold pb-4 ">
            4. Embrace White Space
          </HeadingPrimary>
          <p className=" text-opionalColor/70 text-xl ">
            White space, or negative space, is a powerful tool in typography. It
            helps in decluttering designs and allows each typographic element to
            breathe. Proper use of white space can significantly improve the
            overall balance and composition of your design.
          </p>
        </div>
        <div className=" pb-8 ">
          <HeadingPrimary className=" flex gap-2 plusJakartaSans text-2xl font-bold pb-4 ">
            <span className=" text-primaryColor text-[64px] ">&ldquo;</span>{" "}
            Typography is not just the art of arranging type but the craft of
            breathing life into characters, turning words into stories that
            captivate the soul.
          </HeadingPrimary>
          <p className=" text-opionalColor/70 text-xl ">
            Typography is an art that speaks volumes beyond the mere letters on
            a surface. By applying these tips, designers can elevate their work
            from mere messages to powerful visual statements. Remember,
            mastering typography is a journey of continuous learning and
            experimentation. Embrace the process, and let your designs speak
            louder than words. Happy designing!
          </p>
        </div>
      </div>
    );
};

export default ContentSection;