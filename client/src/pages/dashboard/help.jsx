import React from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
export function Help() {

    return (
        <div className="mt-10 font-CG">
            <div className="mb-12 w-full">
                <div className="bg-white flex flex-col w-full rounded-3xl h-[10rem] p-3 px-6 justify-center items-center">
                    <div className=" h-10 w-[30%] flex justify-center items-center">
                        <h1 className='font-semibold text-[30px]'>How can we help ? </h1>
                    </div>
                    <div className='bg-white flex justify-center   items-center h-10 w-[30%]  mt-2 '>
                        <input className='w-full   h-[80%]  p-4' placeholder='search' >
                        </input>
                        <MagnifyingGlassCircleIcon onClick className=' cursor-pointer w-10 h-10 gap-3'></MagnifyingGlassCircleIcon>

                    </div>

                </div>
            </div>

            <div className=" w-full h-[60vh] gap-1 mb-15 text-black  rounded-3xl flex flex-col justify-beetwen p-10  ">
                <div className="flex flex-row w-full h-[80%] justify-between bg-blue gap-[6rem]">
                    <div className="bg-blue-500 w-full rounded-lg h-full">
                        <img src="/img/me.jpeg" className="w-full rounded-lg h-full object-cover object-center" alt="Your Name" />
                        <div className="font-SG font-semibold text-[15px] flex justify-center mt-1">RIDALLAH Nissrine </div>
                    </div>
                    <div className="bg-red-500 w-full rounded-lg h-full">
                        <img src="/img/hamza.jpg" className="rounded-lg w-full h-full object-cover object-center" alt="Hamza" />
                        <div className="font-SG font-semibold text-[15px] flex justify-center mt-1">NACHID Hamza</div>

                    </div>
                    <div className="bg-yellow-500 w-full rounded-lg h-full">
                        <img src="/img/marouane.jpg" className="w-full rounded-lg h-full object-cover object-center" alt="Marouane" />
                        <div className="font-SG font-semibold text-[15px] flex justify-center mt-1">BOUFAROUJ Marouane</div>

                    </div>
                </div>


            </div>
        </div>


    );
}
export default Help;
