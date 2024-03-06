import VideoComponent from "../components/Video";
import { MdOndemandVideo } from "react-icons/md";
import { FiLayout } from "react-icons/fi";
import { TbRotate360 } from "react-icons/tb";

function Section4() {
    return ( 
        <section className="flex w-[75rem] relative left-[20%] mt-[3.5rem] mb-[7rem]">
            <VideoComponent/>
            <div className="pl-8">
                <h1 className="text-5xl pb-8 text-[#3A8CB1] font-bold">Virtual</h1>
                <div className="flex flex-wrap text-5xl pb-8 gap-3 text-[#3A8CB1] justify-center items-center align-middle">
                    <h1>Tour</h1>
                    <div className="border-b border-gray-400 w-60 h-1 "></div>
                </div>
                <div className="flex text-l py-1"><button className="font-bold flex"> <MdOndemandVideo className="text-[#3A8CB1] mr-4 w-6 h-6" />VIDEO</button></div>
                <div className="flex text-l py-1"><button className="flex"> <TbRotate360 className="text-[#3A8CB1] mr-4 w-6 h-6" />3D Tour</button></div>
                <div className="flex text-l py-1"><button className="flex"> <FiLayout className="text-[#3A8CB1] mr-4 w-6 h-6" />Floor Plans</button></div>
            </div>
        </section>
    );
}

export default Section4 ;