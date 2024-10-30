import React from 'react';
import Container  from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import TestimoniSlider from './TestimoniSlider';

const Testimonials = () => {
    return (
        <div className='  border-t border-transparent ' >
            <Container>
                <div className=' my-[120px] flex justify-between overflow-hidden bg-secondaryColor p-7 rounded-2xl ' >
                    <div  >
                        <h1 className=' text-primaryColor tracking-widest libreFranklin mb-4 ' >TESTIMONIALS</h1>
                        <HeadingPrimary className=' w-[329px] text-5xl leading-tight ' >
                        Hear from Our Customers
                        </HeadingPrimary>
                    </div>
                    <div className=' flex justify-end ' >
                        <div className=' w-[720px] relative ' >
                            <TestimoniSlider></TestimoniSlider>
                            <div className=' absolute w-[90px] h-full z-50 left-0 top-0  bg-gradient-to-r from-secondaryColor to-transparent from-30% ' ></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;