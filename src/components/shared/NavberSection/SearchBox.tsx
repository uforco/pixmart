import React from 'react';
import { BsSearch } from "react-icons/bs";
const SearchBox = () => {
    return (
        <div  >
            
            <form className=" w-[348px] ">   
                <div className="relative flex  items-center border rounded-full px-5 py-[10px] w-full ">
                    <div className=' w-full ' >
                        <input type="search" id="default-search" className="block w-full text-sm text-gray-900 focus:outline-none bg-transparent " placeholder="Search for Digital Assets" />
                    </div>
                    <div>
                        <button type="submit" className="text-primaryColor text-xl hover:font-bold  focus:outline-none rounded-full p-1 ">
                        <BsSearch></BsSearch>
                        </button>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default SearchBox;