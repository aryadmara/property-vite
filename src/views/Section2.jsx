import CardComponent from "../components/card";
import { SlArrowRight } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { LuBedDouble } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { GiMaze } from "react-icons/gi";
import { IoLayersOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { useState } from "react";

function Section2() {
    const [onClick,SetOnClick] = useState(false)
    
    return (

        <section className="flex flex-col md:flex-row items-center relative mt-[3.5rem]">
            <div id="left-section" className=" grid mx-0 md:mx-40 gap-2 md:gap-4 grid-cols-2 grid-rows-2 relative w-fit h-fit -top-20">

                <CardComponent number="5 bedroom">
                    <LuBedDouble className="w-8 h-8 font-light" />
                </CardComponent>

                <CardComponent number="3 bathrooms">
                    <LuBath className="w-8 h-8 font-light" />
                </CardComponent>

                <CardComponent number="5000 sqft" description="Home Size">
                    <GiMaze className="w-8 h-8 font-light" />
                </CardComponent>

                <CardComponent number="30,000 sf" description="Lot Size">
                    <IoLayersOutline className="w-8 h-8 font-light" />
                </CardComponent>
                
            </div>

            <div id="right-section" className="p-4 md-p-0 mt-5 md:mt-0 w-full md:w-1/2">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-10">
                    <div className="flex md:block text-center md:text-left"><h1 className="text-4xl text-[#3A8CB1] font-bold">About<br/>the Property</h1></div>
                    <div className="flex pt-10 md:pt-0">

                        <BiSolidDollarCircle className="text-7xl text-[#BFB47A]" />
                        <h2 className="text-2xl">Offered at<br />$1,000,000</h2>
                    </div>
                </div>

                <div className="mt-12 md:mt-0 ">
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est numquam cupiditate animi, iste inventore! Quas tempora quibusdam inventore sint exercitationem? Animi delectus nesciunt quibusdam assumenda error eius obcaecati nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est numquam cupiditate animi, iste inventore! Quas tempora quibusdam inventore sint exercitationem? Animi delectus nesciunt quibusdam assumenda error eius obcaecati nisi.</p>
                </div>
                <div className="flex flex-col justify-end items-end md:hidden">
                    
                    <HiDotsHorizontal className="h-7 w-auto" onClick={() => SetOnClick(prevState => !prevState)}/>
                    {onClick && <div className=""> 
                        <button className="bg-[#f4f4f4] hover:bg-[#3A8CB1] hover:text-white shadow-lg w-40 h-8 text-xl align-middle font-bold flex justify-center items-center">Read More <SlArrowRight className="h-3" /></button>
                        <button className="bg-[#f4f4f4] hover:bg-[#3A8CB1] hover:text-white shadow-lg w-40 h-8 gap-2 text-xl align-middle font-bold flex justify-center items-center "><BsDownload /> Brochure</button>
                        <button className="bg-[#f4f4f4] hover:bg-[#3A8CB1] hover:text-white shadow-lg w-40 h-8 gap-2 text-xl align-middle font-bold flex justify-center items-center"><BsDownload /> Document</button>
                    </div>}

                </div>
                     
                <div className="hidden md:flex  justify-between font-bold mt-5">
                    <button className="h-8 text-xl align-middle font-bold flex justify-center items-center">Read More <SlArrowRight className="h-3" /></button>
                    <div className="flex gap-10">
                        <button className="h-8 gap-2 text-xl align-middle font-bold flex justify-center items-center "><BsDownload /> Brochure</button>
                        <button className="h-8 gap-2 text-xl align-middle font-bold flex justify-center items-center"><BsDownload /> Document</button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Section2;