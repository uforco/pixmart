"use client";

import { AutoPlay } from "@egjs/flicking-plugins";
import Flicking, { MoveEndEvent } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./style.scss";
import Uidesign from "../../home1/headerSection/serviceicon/Uidesign";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import { ReactNode, useRef } from "react";
import Socialmedia from "../../home1/headerSection/serviceicon/Socialmedia";
import Pentablet from "../../home1/headerSection/serviceicon/Pentablet";
import Presentation from "../../home1/headerSection/serviceicon/Presentation";



export default function FliperSlider() {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true }),
  ];
  return (
    <Flicking
      moveType="freeScroll"
      circular={true}
      horizontal={false}
      // vertical={true}
      plugins={plugins}
      bound={true}
    >
      <div className="weather-panel">
        <Card>
          <div className=" w-full h-full ">
            <div className=" w-12 h-12 overflow-hidden  ">
              <Uidesign iconSize={48}></Uidesign>
            </div>
            <HeadingPrimary className="text-xl font-bold mt-4 group-hover:text-white text-opionalColor  ">
              UI Kits
            </HeadingPrimary>
            <p className=" group-hover:text-white text-opionalColor ">
              Sleek and modern interfaces to vibrant and interactive UI designs.
            </p>
          </div>
        </Card>
      </div>

      <div className="weather-panel">
        <Card>
          <div className=" w-full h-full ">
            <div className=" w-12 h-12 overflow-hidden  ">
              <Socialmedia iconSize={48}></Socialmedia>
            </div>
            <HeadingPrimary className="text-xl font-bold mt-4 group-hover:text-white text-opionalColor  ">
              Social Media
            </HeadingPrimary>
            <p className=" group-hover:text-white text-opionalColor ">
              Eye-catching design & interactive posts to suit any campaigns.
            </p>
          </div>
        </Card>
      </div>

      <div className="weather-panel">
        <Card>
          <div className=" w-full h-full ">
            <div className=" w-12 h-12 overflow-hidden  ">
              <Presentation iconSize={48}></Presentation>
            </div>
            <HeadingPrimary className="text-xl font-bold mt-4 group-hover:text-white text-opionalColor  ">
              Presentation
            </HeadingPrimary>
            <p className=" group-hover:text-white text-opionalColor ">
               Sleek, professional, and creative slides for any event or occasion.
            </p>
          </div>
        </Card>
      </div>

      <div className="weather-panel">
        <Card>
          <div className=" w-full h-full ">
            <div className=" w-12 h-12 overflow-hidden  ">
              <Pentablet iconSize={48}></Pentablet>
            </div>
            <HeadingPrimary className="text-xl font-bold mt-4 group-hover:text-white text-opionalColor  ">
            Illustrations
            </HeadingPrimary>
            <p className=" group-hover:text-white text-opionalColor ">
              Quality illustrations with a diverse range of styles and themes.
            </p>
          </div>
        </Card>
      </div>

    </Flicking>
  );
}

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" border cursor-pointer p-6 hoverChangeimg group w-[305px] h-[210px] my-2 flex justify-center items-center rounded-xl overflow-hidden hover:bg-primaryColor hover:text-white bg-secondaryColor text-opionalColor ">
      {children}
    </div>
  );
};
