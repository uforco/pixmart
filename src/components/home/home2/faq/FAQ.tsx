import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import PrimaryBtn from "@/components/shared/button/PrimaryBtn";
import Collapse from "@/components/shared/collapse/Collapse";

const FAQ = () => {
  return (
    <div className=" border-t border-transparent " >
      <Container>
        <div className=" relative  my-[120px]  " >
          <div className=" flex  justify-between ">
            <div className=" flex flex-col justify-between items-start ">
              <div>
                <h1 className=" text-primaryColor libreFranklin tracking-widest " >F.A.Q</h1>
                <HeadingPrimary className=" text-5xl leading-tight w-[355px] ">
                  Answers to Your Questions
                </HeadingPrimary>
              </div>
              <div>
                <PrimaryBtn className=" font-bold px-10 py-3 rounded-lg bg-secondaryColor ">
                  <span className="text-primaryColor ">Ask Us A Question</span>
                </PrimaryBtn>
              </div>
            </div>
            <div>
              <Collapse className=" mb-4 " HeadLine={"Can I request a refund?"}>
                <p>
                  Accessing your purchased products is seamless and hassle-free
                  your account, navigate to the 'My Purchases' section
                </p>
              </Collapse>
              <Collapse className=" mb-4 " HeadLine={"How do I access my purchased products?"}>
                <p>
                  Accessing your purchased products is seamless and hassle-free
                  on our digital design assets marketplace. Simply log in to
                  your account, navigate to the 'My Purchases' section, and
                  you'll find all your purchased products ready for download.
                </p>
              </Collapse>
              <Collapse className=" mb-4 " HeadLine={"Are there any discounts for bulk purchases?"}>
                <p>
                  Accessing your purchased products is seamless and hassle-free
                </p>
              </Collapse>
              <Collapse className=" mb-4 " HeadLine={"What payment methods do you accept here?"}>
                <p>
                  Accessing your purchased products is seamless and hassle-free
                  on our digital design assets marketplace. Simply log in to
                  your account, navigate to the 'My Purchases' section, and
                </p>
              </Collapse>
            </div>
          </div>
          <div className=" absolute backdrop-blur-3xl top-1/2 -translate-y-1/2 -z-10 w-[599px] h-[598px] rounded-full left-1/2 -translate-x-1/2 radialgradientBgDip" ></div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
