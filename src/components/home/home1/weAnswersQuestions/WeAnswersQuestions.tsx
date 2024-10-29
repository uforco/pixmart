import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import Collapse from "../../../shared/collapse/Collapse";

const WeAnswersQuestions = () => {
  return (
    <div >
      <Container>
        <div className=" relative  mb-[70px] ">
          <div className=" z-50  bg-transparent ">
            <div className=" flex justify-center mb-12 bg-transparent ">
              <HeadingPrimary className=" text-5xl font-bold w-full  bg-transparent sm:w-[540px] text-center leading-tight ">
                We Have Answers to All of Your Questions
              </HeadingPrimary>
            </div>
            <div className=" w-full flex justify-center relative  pb-[40px]  ">
              

              <div className=" flex flex-col gap-4 ">
                <Collapse HeadLine={"Can I request a refund?"}>
                  <p>
                    Accessing your purchased products is seamless and
                    hassle-free on our digital design assets marketplace. Simply
                    log in to your account, navigate to the 'My Purchases'
                    section, and you'll find all your purchased products ready
                    for download.
                  </p>
                </Collapse>
                <Collapse HeadLine={"How do I access my purchased products?"}>
                  <p>
                    Accessing your purchased products is seamless and
                    hassle-free on our digital design assets marketplace. Simply
                    log in to your account, navigate to the 'My Purchases'
                    section, and you'll find all your purchased products ready
                    for download.
                  </p>
                </Collapse>
                <Collapse
                  HeadLine={"Are there any discounts for bulk purchases?"}
                >
                  <p>
                    Accessing your purchased products is seamless and
                    hassle-free on our digital design assets marketplace. Simply
                    log in to your account, navigate to the 'My Purchases'
                    section, and you'll find all your purchased products ready
                    for download.
                  </p>
                </Collapse>
                <Collapse HeadLine={"What payment methods do you accept here?"}>
                  <p>
                    Accessing your purchased products is seamless and
                    hassle-free on our digital design assets marketplace. Simply
                    log in to your account, navigate to the 'My Purchases'
                    section, and you'll find all your purchased products ready
                    for download.
                  </p>
                </Collapse>
                <Collapse
                  HeadLine={
                    "Can I sell my digital products on this marketplace?"
                  }
                >
                  <p>
                    Accessing your purchased products is seamless and
                    hassle-free on our digital design assets marketplace. Simply
                    log in to your account, navigate to the 'My Purchases'
                    section, and you'll find all your purchased products ready
                    for download.
                  </p>
                </Collapse>
              </div>
            </div>
          </div>
          <div className=" radialgradientBgDip -z-10 w-[700px] h-[700px] rounded-full absolute top-[60%] -translate-y-2/4 left-1/2 -translate-x-1/2 "></div>
        </div>
      </Container>
    </div>
  );
};

export default WeAnswersQuestions;
