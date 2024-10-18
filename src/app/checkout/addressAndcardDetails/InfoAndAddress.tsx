import React from 'react';

const InfoAndAddress = () => {
    return (
      <div>
        <div className=" flex justify-between ">
          <div className="relative w-[351px] ">
            <label
              className=" text-xl font-bold plusJakartaSans"
              htmlFor="fullName"
            >
              Full Name <span className=" text-primaryColor ">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`block my-4 w-full border rounded-lg libreFranklin ps-2 text-base  focus:outline-0  h-[70px]`}
              placeholder="Amelia Robert Johnson"
              required
            />
          </div>
          <div className="relative w-[351px] ">
            <label
              className=" text-xl font-bold plusJakartaSans"
              htmlFor="phoneNumber"
            >
              Phone Number <span className=" text-primaryColor ">*</span>
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className={`block my-4 w-full border rounded-lg libreFranklin ps-2 text-base  focus:outline-0  h-[70px]`}
              placeholder="+123 456 7890"
              required
            />
          </div>
        </div>
        <div>
          <div className="relative w-full ">
            <label
              className=" text-xl font-bold plusJakartaSans"
              htmlFor="email"
            >
              Email Address <span className=" text-primaryColor ">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`block my-4 w-full border rounded-lg libreFranklin ps-2 text-base  focus:outline-0  h-[70px]`}
              placeholder="amelia.robertjohnson@pixmart.com"
              required
            />
          </div>
        </div>
      </div>
    );
};

export default InfoAndAddress;