import VideoComponent from "../components/Video";
import { MdOndemandVideo } from "react-icons/md";
import { FiLayout } from "react-icons/fi";
import { TbRotate360 } from "react-icons/tb";

function Section4() {
    return ( 
        <section className="flex w-[75rem] relative left-[20%] mt-[3.5rem] mb-[7rem]">
            <VideoComponent/>
            <div className="pl-8">
                <h1 className="text-5xl pb-8 text-[#3A8CB1] font-bold">Virtual <br/>Tour</h1>
                <div className="flex text-l py-3"><MdOndemandVideo className="text-[#3A8CB1] mr-4 w-6 h-6" /><h1 className="font-bold">VIDEO</h1></div>
                <div className="flex text-l py-3"><TbRotate360 className="text-[#3A8CB1] mr-4 w-6 h-6" /><h1>3D Tour</h1></div>
                <div className="flex text-l py-3"><FiLayout className="text-[#3A8CB1] mr-4 w-6 h-6" /><h1>Floor Plans</h1></div>
            </div>
        </section>
    );
}

export default Section4 ;