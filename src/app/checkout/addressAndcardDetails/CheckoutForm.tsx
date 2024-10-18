import React from "react";
import InfoAndAddress from "./InfoAndAddress";
import CardDetails from "./CardDetails";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import CheckOutCard from "@/components/shared/CardBox/CheckoutSceCard/CheckOutCard";

const CheckoutForm = () => {
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
    <>
      <Container>
        <div className=" w-full flex justify-between mb-96 ">
          <div className=" w-[723px] overflow-hidden ">
            <div className=" flex flex-col w-full gap-3 ">
              {/* left containe */}
              <InfoAndAddress></InfoAndAddress>
              <CardDetails></CardDetails>
            </div>
          </div>
          <div className=" w-[501px] ">
            <div
              className=" w-full px-7 pt-6 pb-8 shadow-xl shadow-opionalColor/10
              rounded-lg "
              style={{
                boxShadow:
                  " 0px 10px 20px 0px rgb(0 0 0 / 2%), 0px 5px 20px 6px rgb(0 0 0 / 5%)",
              }}
            >
              <div className=" w-[445px] overflow-hidden mx-auto ">
                <div className=" ">
                  <div>
                    <HeadingPrimary className=" text-2xl font-bold " >Your Order</HeadingPrimary>
                  </div>
                  <div className="">
                    {wishlist?.map((item, inx) => (
                      <CheckOutCard
                        key={item?.name}
                        data={item}
                        inx={inx}
                      ></CheckOutCard>
                    ))}
                  </div>
                  <div className=" flex justify-between items-center my-2 mt-8 ">
                    <p className=" text-opionalColor/50 ">Sub Total</p>
                    <p className=" font-bold ">$65.00</p>
                  </div>
                  <div className=" flex justify-between items-center mb-6 ">
                    <p className=" text-opionalColor/50 ">
                      Total After Membership
                    </p>
                    <p className=" font-bold text-primaryColor text-xl ">
                      $65.00
                    </p>
                  </div>
                  <div>
                    <button className=" w-full h-14 flex justify-center items-center bg-primaryColor text-white rounded-lg ">
                      Complete Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckoutForm;
