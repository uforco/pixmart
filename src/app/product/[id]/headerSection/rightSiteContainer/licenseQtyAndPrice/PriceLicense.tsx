'use client'
import React, { ChangeEvent } from 'react';
import PriceAndQty from './PriceAndQty';
import PrimaryBtn from '@/components/shared/button/PrimaryBtn';

const PriceLicense = () => {

  function checked(event: ChangeEvent<HTMLInputElement>): boolean | void {
    // return item === "All Categories" ? true : false
    console.log(event?.target?.checked);
  }

  return (
    <div className=" pt-11 border-t border-gray-300 ">
      <div className=" mb-6 ">
        <ul>
          <li className=" flex justify-between ">
            <div
              //   key={item}
              //   onClick={() => checkfunc(`${item}`)}
              className="flex items-center my-2 font-[family-name:var(--font-libreFranklin)] text-base "
            >
              <input
                type="checkbox"
                // value={checked}
                // defaultChecked={item === "All Categories" ? true : false}
                //   checked={true}
                onChange={checked}
                className="w-4 h-4 text-primaryColor bg-gray-100  rounded "
              ></input>
              <label
                // htmlFor="link-checkbox"
                className={` libreFranklin font-bold ms-2 text-sm text-opionalColor tracking-wide`}
              >
                Standard License
              </label>
            </div>
            <p className=" libreFranklin font-bold ">$16.00</p>
          </li>
          <li className=" flex justify-between ">
            <div
              //   key={item}
              //   onClick={() => checkfunc(`${item}`)}
              className="flex items-center my-2 font-[family-name:var(--font-libreFranklin)] text-base "
            >
              <input
                type="checkbox"
                // value={checked}
                // defaultChecked={item === "All Categories" ? true : false}
                // checked={false}
                onChange={checked}
                className="w-4 h-4 text-primaryColor bg-gray-100  rounded "
              ></input>
              <label
                // htmlFor="link-checkbox"
                className={`  ms-2 text-sm text-opionalColor tracking-wide`}
              >
                Extended Licenses
              </label>
            </div>
            <p className=" libreFranklin font-bold ">$49.00</p>
          </li>
        </ul>
      </div>
      <div>
        <PriceAndQty></PriceAndQty>
      </div>
      <div className=' flex justify-between items-center mt-10 ' >
        <button className=" bg-primaryColor/15 text-primaryColor libreFranklin font-bold w-[188px] h-16 overflow-hidden flex justify-center items-center px-10 py-5 rounded-xl ">
          Preview
        </button>
        <PrimaryBtn className=" libreFranklin font-bold w-[305px] h-16 overflow-hidden flex justify-center items-center px-10 py-5 rounded-xl ">
          Purchase Now
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default PriceLicense;