import React from "react";

const PriceFilter = () => {
  return (
    <div className="range-input relative w-full ">
      <input
        type="range"
        // value="50"
        // min={0}
        // max={50}
        // className="w-full absolute left-0 top-0 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      ></input>
      <input
        type="range"
        // value="10"
        // min={0}
        // max={50}
        // className="w-full absolute left-0 top-0 rotate-180 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      ></input>
    </div>
  );
};

export default PriceFilter;
