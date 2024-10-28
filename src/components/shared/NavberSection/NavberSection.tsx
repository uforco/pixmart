import React from 'react';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { AiOutlineShopping } from "react-icons/ai"
import SearchBox from './SearchBox';
const NavberSection = () => {
    return (
        <div className=' py-6 shadow-lg shadow-secondaryColor/5 bg-secondaryColor ' >
            <Container>
                <div className=' flex justify-between items-center ' >
                    <div className=' flex justify-between items-center ' >
                       <HeadingPrimary className=' text-[28px] font-bold plusJakartaSans text-primaryColor mr-14 ' >
                            Pixmart.
                        </HeadingPrimary>
                        <div>
                            <ul className=' flex justify-between items-center gap-12 '  >
                                <li>About</li>
                                <li>Products</li>
                                <li>Creators</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' flex justify-end items-center gap-3 ' >
                        <SearchBox></SearchBox>
                        <div className=' size-11 rounded-full flex justify-center items-center bg-secondaryColor text-xl text-primaryColor ' >
                            <AiOutlineShopping></AiOutlineShopping>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavberSection;