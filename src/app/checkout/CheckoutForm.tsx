import React from "react";
import InfoAndAddress from "./addressAndcardDetails/InfoAndAddress";
import CardDetails from "./addressAndcardDetails/CardDetails";
import Container from "@/components/shared/Container";
import ProductAndPrice from './productAndPrice/ProductAndPrice';

const CheckoutForm = () => {
  

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
                <ProductAndPrice></ProductAndPrice>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckoutForm;
