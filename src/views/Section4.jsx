import VideoComponent from "../components/Video";
import { MdOndemandVideo } from "react-icons/md";
import { FiLayout } from "react-icons/fi";
import { TbRotate360 } from "react-icons/tb";

function Section4() {
    return ( 
        <section className="flex flex-col md:flex-row md:w-[75rem] relative md:left-[20%] mt-[0rem] md:mt-[3.5rem] mb-[7rem]">
            <div className="order-2 md:order-1">
                <VideoComponent />
            </div>
            <div className="order-1 md:order-2 pl-3 md:pl-8 my-10 md:my-0">
                <div className="flex flex-wrap text-5xl pb-8 gap-3 text-[#3A8CB1] justify-center md:justify-start items-center align-middle">
                    <h1 className="text-5xl text-[#3A8CB1] font-bold">Virtual</h1>
                    <div className="block md:flex items-center text-center align-middle">
                        <h1 className="ml-0 text-center md:text-left">Tour</h1>
                        <div className="invisible md:visible border-b border-gray-400 w-60 h-1 "></div>
                    </div>
                </div>
                <div className="flex md:block flex-col justify-center items-center">
                    <div className="flex text-l py-1"><button className="font-bold flex"> <MdOndemandVideo className="text-[#3A8CB1] mr-4 w-6 h-6" />VIDEO</button></div>
                    <div className="flex text-l py-1"><button className="flex"> <TbRotate360 className="text-[#3A8CB1] mr-4 w-6 h-6" />3D Tour</button></div>
                    <div className="flex text-l py-1"><button className="flex"> <FiLayout className="text-[#3A8CB1] mr-4 w-6 h-6" />Floor Plans</button></div>
                </div>
            </div>
        </section>
    );
}

export default Section4 ;