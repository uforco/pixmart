import React from 'react';
import Container from '@/components/shared/Container';
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { AiOutlineShopping } from "react-icons/ai"
import SearchBox from './SearchBox';
import Link from 'next/link';
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
                                <li className=' hover:text-primaryColor cursor-pointer ' > <Link href={"/about"} > About </Link> </li>
                                <li className=' hover:text-primaryColor cursor-pointer ' > <Link href={"/category"} > Products </Link> </li>
                                <li className=' hover:text-primaryColor cursor-pointer ' > <Link href={"/creator"} > Creators </Link> </li>
                                <li className=' hover:text-primaryColor cursor-pointer ' > <Link href={"blog"} > Blog </Link> </li>
                                <li className=' hover:text-primaryColor cursor-pointer ' > <Link href={"/"} > Contact </Link> </li>
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