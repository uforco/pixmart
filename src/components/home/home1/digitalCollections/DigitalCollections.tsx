import React from "react";
import Container from "@/components/shared/Container";
import HeadingPrimary from "@/components/shared/headline/HeadingPrimary";
import PrimaryBtn from "@/components/shared/button/PrimaryBtn";
import SliderCollection from "./SliderCollection";

const DigitalCollections = () => {
  return (
    <div className=" bg-secondaryColor ">
      <Container>
        <div className=" flex justify-between items-center py-20 gap-10 ">
          <div className=" w-[412px]  ">
            <HeadingPrimary className=" text-5xl leading-tight w-[338px] ">
              Explore Digital Collections
            </HeadingPrimary>
            <p className=" mt-4 mb-10 ">
              Our diverse collections offer endless design and creative
              possibilities for designers.
            </p>
            <PrimaryBtn
              className=" px-10 h-12 rounded-lg flex justify-center
                         items-center "
            >
              Shop Now
            </PrimaryBtn>
          </div>
          <div className=" w-full  flex justify-end overflow-hidden  ">
            <div className="  relative ">
              {/* <div className=" absolute top-0 right-0 h-full w-full  bg-gradient-to-r from-secondaryColor to-transparent z-40 to-15%  "></div> */}
              {/* <div className=" absolute top-0 right-0 h-full w-full  bg-gradient-to-l from-secondaryColor to-transparent z-40 to-15%  "></div> */}
              <div className=" w-[780px]  mx-8 ">
                <SliderCollection></SliderCollection>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DigitalCollections;

// const CollectionCard = () => {
//   return (
//     <div className=" w-full flex justify-center ">
//       <div className=" w-[372px] h-[430px] rounded-lg p-4 bg-white ">
//         <div className=" w-full h-[330px] rounded-lg bg-gray-200 "></div>
//         <div className=" mt-3  ">
//           <HeadingPrimary className=" text-xl ">
//             Education Social Media Feeds
//           </HeadingPrimary>
//           <p className=" text-opionalColor/70 ">100+ Items</p>
//         </div>
//       </div>
//     </div>
//   );
// };
