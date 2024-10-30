"use client";
import * as React from "react";
import "./styles.scss";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ProductSlider = () => {
  const [asliderstyle, setAsliderstyle] = React.useState<number>(1);
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 1,
    slideChanged(slider) {
      // setCurrentSlide(slider.track.details.rel)
      let aslid = slider?.track?.details;
      console.log(aslid);
      setAsliderstyle(aslid?.rel);
    },
    slides: {
      perView: 3,
      spacing: 25,
    },
  });
  return (
    <div ref={ref} className="keen-slider transition-all duration-300 py-16 ">
      {["A", "S", "O", "L", "U", "T", "Y"].map((slide, index, arr) => (
        <div
          key={index}
          className={`keen-slider__slide number-slide${slide} transition-all duration-300  rounded-md `}
          style={{
            height: "530px", // Adjust height of the active slide
            width: "536px", // Adjust height of the active slide
            top:
                index === 0 && asliderstyle === arr.length - 1
                ? "-50px" : index === asliderstyle + 1
                ? "-50px"
                : "0px", // Adjust height of the active slide
            transition: "height 0.3s ease", // Smooth transition for height change
          }}
        >
          <div
            className={` flex justify-center items-center w-full h-full bg-[#D9D9D9] `}
          >
            {slide}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductSlider;

function setCurrentSlide(rel: number) {
  throw new Error("Function not implemented.");
}
