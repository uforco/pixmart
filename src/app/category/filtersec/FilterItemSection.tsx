"use client";
import React, { ChangeEvent, useState } from "react";

const FilterItemSection = ({ filterItems }: { filterItems: string[] }) => {
  const [catego, setCatego] = useState<string[]>([]);
  const checkfunc = (e: string) => {
    if (catego.some((item: string) => item === e)) {
      let newValue = catego.slice().filter((item: string) => item !== e);
      return setCatego([...newValue]);
    }
    setCatego((priValue: string[]) => [...priValue, e]);
  };

  function checked(event: ChangeEvent<HTMLInputElement>): boolean | void {
    return event.target.checked;
  }

  return (
    <div className=" pb-10 my-5 mb-10 border-b border-opionalColor/30 ">
      <ul className=" flex flex-col gap-1 ">
        {filterItems?.map((item: string) => (
          <li
            key={item}
            onClick={() => checkfunc(`${item}`)}
            className="flex items-center my-2 font-[family-name:var(--font-libreFranklin)] text-base "
          >
            <input
              type="checkbox"
              // value={checked}
              defaultChecked={item === "All Categories" ? true : false}
              checked={catego.some((vel: string) => vel === item)}
              onChange={() => checked}
              className="w-4 h-4 text-primaryColor bg-gray-100  rounded "
            ></input>
            <label
              // htmlFor="link-checkbox"
              className={` ${
                catego.some((vel: string) => vel === item)
                  ? "font-bold "
                  : "font-normal"
              } ms-2 text-sm text-opionalColor tracking-wide`}
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItemSection;
