import CheckOutCard from '@/components/shared/CardBox/CheckoutSceCard/CheckOutCard';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import React from 'react';

const ProductAndPrice = () => {

const wishlist = [
    {
      name: "SkyHomes – Real Estate Landing Page",
      category: "UX Commerce",
      price: "11.00",
      qty: "1",
      licence_type: "Standard Licence",
    },
    {
      name: "Griya - Real Estate Dashboard UI",
      category: "Tech Pioneers",
      price: "49.00",
      qty: "2",
      licence_type: "Extended Licence",
    },
    {
      name: "MyEstate – Real Estate Hero Section",
      category: "Minimal UI UX",
      price: "5.00",
      qty: "1",
      licence_type: "Standard Licence",
    },
  ];

    return (
      <div className=" ">
        <div>
          <HeadingPrimary className=" text-2xl font-bold mb-6 ">
            Your Order
          </HeadingPrimary>
        </div>
        <div className="">
          {wishlist?.map((item, inx) => (
            <CheckOutCard key={item?.name} data={item} inx={inx}></CheckOutCard>
          ))}
        </div>
        <div className=" flex justify-between items-center my-2 mt-8 ">
          <p className=" text-opionalColor/50 ">Sub Total</p>
          <p className=" font-bold ">$65.00</p>
        </div>
        <div className=" flex justify-between items-center mb-6 ">
          <p className=" text-opionalColor/50 ">Total After Membership</p>
          <p className=" font-bold text-primaryColor text-xl ">$65.00</p>
        </div>
        <div>
          <button className=" w-full h-14 flex justify-center items-center bg-primaryColor text-white rounded-lg ">
            Complete Purchase
          </button>
        </div>
      </div>
    );
};

export default ProductAndPrice;