import Container from '@/components/shared/Container';
import React from 'react';
import FliperSlider from './FliperSlider';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import PrimaryBtn from '@/components/shared/button/PrimaryBtn';

const Categories = () => {
    return (
        <div className=' my-[120px] ' >
            <Container>
                <div className=' flex justify-between overflow-hidden ' >
                    <div className=' w-[630px] flex justify-between items-end overflow-hidden ' >
                        <div className='  h-[512px] relative p-1 ' >
                            <div className=' w-full absolute left-0 bottom-0 h-[65px] bg-gradient-to-t from-white/90  to-transparent  z-50 ' > </div>
                            <div className=' -mt-[0px] ' >
                                <FliperSlider></FliperSlider>
                            </div>
                        </div>
                        <div className='  h-[512px] relative p-1 ' >
                        <div className=' w-full absolute left-0 top-0 h-[65px] bg-gradient-to-b from-white/90  to-transparent z-50  ' > </div>
                            <div className=' -mt-[160px] ' >
                                <FliperSlider></FliperSlider>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[530px] flex justify-start items-center  ' >
                        <div>
                            <div>
                                <h1 className=" text-primaryColor mb-1 ">CATEGORIES</h1>
                                <HeadingPrimary className=" text-5xl  leading-tight w-[449px] ">
                                    Discover Assets for Every Projects
                                </HeadingPrimary>
                            </div>
                            <p className=' mt-4 mb-10 ' >
                            From fonts and icons to mockups and templates, our comprehensive categories ensure that you find exactly what you need to your projects.
                            </p>

                            <PrimaryBtn className=" px-10 py-3 rounded-lg " >
                                Shop Now
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Categories;