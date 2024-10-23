import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import AboutTeamCard from "@/components/shared/CardBox/aboutCard/AboutTeamCard";

const Team = () => {
  return (
    <div className=" bg-secondaryColor pt-20 pb-[100px] " >
      <Container>
        <div className=" flex flex-col justify-center items-center mb-12 ">
          <h1 className=" text-center text-primaryColor ">TEAM</h1>
          <HeadingPrimary className=" text-center text-5xl w-full sm:w-[494px] ">
            The Minds and Hearts Behind Our Works
          </HeadingPrimary>
        </div>
        <div className=" grid grid-cols-3 gap-6 ">
            <AboutTeamCard></AboutTeamCard>
            <AboutTeamCard></AboutTeamCard>
            <AboutTeamCard></AboutTeamCard>
            <AboutTeamCard></AboutTeamCard>
            <AboutTeamCard></AboutTeamCard>
            <AboutTeamCard></AboutTeamCard>
        </div>
      </Container>
    </div>
  );
};

export default Team;


