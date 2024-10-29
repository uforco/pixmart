import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import PricingCard, { PricingCardDataType } from "@/components/shared/pricingCard/PricingCard";

const PricingPlan = () => {
  const priceData = [
    {
      membership: "Standard Membership",
      price: "14.99",
      services: [
        "Enhanced Resource Access",
        "Monthly Credits",
        "Priority Customer Support",
        "Community Features Access",
      ],
    },
    {
      membership: "Plus Membership",
      badge: "BEST SELLER",
      price: "29.99",
      services: [
        "All Standard Benefits",
        "Increased Monthly Credits",
        "Early Access to New Releases",
        "Member-Only Offers",
      ],
    },
    {
      membership: "Pro Membership",
      price: "49.99",
      services: [
        "All Plus Benefits",
        "Unlimited Downloads",
        "Custom Licensing",
        "Direct Creator Collaboration",
      ],
    },
  ];

  return (
    <div>
      <Container>
        <div className="flex flex-col items-center mb-12 ">
          <h2 className=" text-primaryColor tracking-widest libreFranklin mb-3 text-center ">
            PRICING PLAN
          </h2>
          <HeadingPrimary className=" text-5xl font-bold w-full sm:w-[566px] text-center leading-tight ">
            Choose The Perfect Plan for Creative Potential
          </HeadingPrimary>
        </div>
        <div className=" flex justify-between items-center mt-20 ">
          {priceData?.map((priceInfo: PricingCardDataType, inx) => (
            <div
              key={priceInfo?.membership}
              className={priceInfo.badge? " -mt-14 " : ""}
            >
              <PricingCard
                className={` ${priceInfo.badge? "border-primaryColor border-2" : ""} `}
                priceInfo={priceInfo}
              ></PricingCard>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PricingPlan;

