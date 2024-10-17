import React, { ChangeEvent } from 'react';
import Container from "@/components/shared/Container";
import CartFromProductCard from "@/components/shared/CardBox/cartPageComponen/CartFromProductCard";
import MemberAndPrice from './MemberAndPrice';


const CartList = () => {
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

 let Regularprice: number = wishlist?.reduce((preValue, currValue) => {
   //   console.log("hello",preValue);
   return preValue + parseFloat(currValue?.price);
 }, 0);
    

    return (
      <>
        <Container>
          <div className=" w-full flex justify-between  ">
            <div className=" w-[826px] overflow-hidden ">
              <div className=" flex flex-col w-full gap-3 ">
                {wishlist?.map((cartdata, inx, arr) => (
                  <CartFromProductCard
                    key={cartdata?.name}
                    cartdata={cartdata}
                    inx={inx}
                    lastinx={arr?.length}
                  ></CartFromProductCard>
                ))}
              </div>
            </div>
            <div className=" w-[406px]  ">
              {Regularprice !== undefined? <MemberAndPrice Regularprice={Regularprice}></MemberAndPrice>: "" }
            </div>
          </div>
        </Container>
      </>
    );
};

export default CartList;