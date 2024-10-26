
'use client'

import React, { ReactNode, useState } from 'react';
import  HeadingPrimary from '@/components/shared/headline/HeadingPrimary';
import { IoIosArrowDown } from "react-icons/io";




const Collapse = ({ className: classname, HeadLine, children }: {className?: string, HeadLine: string , children: ReactNode }) => {

    const [ open, setOpen ] = useState<boolean>(false)

    return (
        <div  className={` ${classname} transition-all duration-300 w-[700px] border-2 ${open? "border-primaryColor duration-500  " : " border-white " } shadow-xl rounded-lg p-6 bg-white  `} >

            <div onClick={() => setOpen((priValue) => !priValue) } className=' flex justify-between items-center cursor-pointer ' >
                <HeadingPrimary className=' text-xl font-bold  ' >
                    {HeadLine}
                </HeadingPrimary>
                <button className=' h-full z-40 ' >
                    <span className={`  text-2xl text-primaryColor   `} >
                        <IoIosArrowDown className={`${open? ' -rotate-180 ' : "rotate-0"} transition-all duration-300 `} ></IoIosArrowDown>
                    </span>
                </button>
            </div>

            <div className={` ${open? ' block ' : " hidden "}  mt-4 text-opionalColor/80 transition-all duration-300 `} >
                {children}
                
            </div>

        </div>
    );
};

export default Collapse;