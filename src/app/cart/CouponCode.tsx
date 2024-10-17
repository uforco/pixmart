import React from 'react';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';

const CouponCode = () => {
    return (
      <form className="max-w-md mx-auto">
        <div>
          <HeadingPrimary className='libreFranklin text-base ' >Got any coupon code?</HeadingPrimary>
        </div>
        <div className="relative border rounded-lg p-1 h-16 mt-2 ">
          <input
            type="search"
            id="default-search"
            className="block w-full libreFranklin p-2 ps-2 text-base focus:outline-0 border-opionalColor h-full "
            placeholder="Enter coupon code ..."
            required
          />
          <button
            type="submit"
            className="text-primaryColor absolute uppercase font-bold p-1.5 end-1 top-1/2 -translate-y-1/2 libreFranklin text-base "
          >
            Apply
          </button>
        </div>
      </form>
    );
};

export default CouponCode;