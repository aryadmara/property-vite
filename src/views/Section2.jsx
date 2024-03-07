import CardComponent from "../components/card";
import { SlArrowRight } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";
import { LuBedDouble } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { GiMaze } from "react-icons/gi";
import { IoLayersOutline } from "react-icons/io5";

function Section2() {
    return (

        <section className="flex relative flex-col flex-wrap h-[30rem] mt-[3.5rem] w-fit">
            <div id="left-section" className="grid mx-40 gap-4 grid-cols-2 grid-rows-2 absolute -top-20">

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
            <div id="right-section" className="ml-[37rem] mt-5 w-2/4">
                <div className="flex justify-between">
                    <div className=""><h1 className="text-4xl text-[#3A8CB1] font-bold w-[18rem]">About<br />the Property</h1></div>
                    <div className="flex">
                        <BiSolidDollarCircle className="text-7xl text-[#BFB47A]" />
                        <h2 className="text-2xl">Offered at<br />$1,000,000</h2>
                    </div>
                </div>

                <div className="mt-12 ">
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est numquam cupiditate animi, iste inventore! Quas tempora quibusdam inventore sint exercitationem? Animi delectus nesciunt quibusdam assumenda error eius obcaecati nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est numquam cupiditate animi, iste inventore! Quas tempora quibusdam inventore sint exercitationem? Animi delectus nesciunt quibusdam assumenda error eius obcaecati nisi.</p>
                </div>
                <div className="flex justify-between font-bold mt-5">
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