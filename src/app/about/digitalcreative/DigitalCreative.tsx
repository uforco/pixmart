
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import  PrimaryBtn  from '@/components/shared/button/PrimaryBtn';

const DigitalCreative = () => {
    return (
        <div className=' overflow-hidden h-[542px] my-[120px] bg-secondaryColor' >
        <Container>
          <div className=" flex   justify-between h-[542px] gap-7  ">
            <div className=" w-3/5  h-full relative   " >
                  <div className=' absolute right-0 top-0 grid grid-cols-2 w-[1180px] gap-5 ' >
                        <div className=' w-[576px] h-[400px] rounded-lg bg-white p-2 -mt-32 ' ><div className=' rounded-lg w-full h-full bg-gray-200 '>1</div></div>
                        <div className=' w-[576px] h-[400px] rounded-lg bg-white p-2 mt-8 ' ><div className=' rounded-lg w-full h-full bg-gray-200 '>2</div></div>
                        <div className=' w-[576px] h-[400px] rounded-lg bg-white p-2 -mt-40 ' ><div className=' rounded-lg w-full h-full bg-gray-200 '>3</div></div>
                        <div className=' w-[576px] h-[400px] rounded-lg bg-white p-2 ' ><div className=' rounded-lg w-full h-full bg-gray-200 '>4</div></div>
                  </div>
            </div>
            <div className=' w-2/5 overflow-hidden  ' >
                <div className=" w-[477px] h-full flex justify-center items-center ">
                    <div>
                        <HeadingPrimary className=' text-5xl font-bold mb-4 leading-tight ' >
                            Join Our Digital Creative Revolution
                        </HeadingPrimary>
                        <p className=' text-xl text-opionalColor/70 mb-10 ' >
                        Share your talent with the world and become a part of our
                        ever-growing community of creators.
                        </p>
                        <PrimaryBtn className=' px-10 py-3 rounded-lg ' >Become A Creator</PrimaryBtn>
                    </div>
                </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default DigitalCreative;