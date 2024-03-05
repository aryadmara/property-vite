import CardComponent from "../components/card";
import { SlArrowRight } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { BiSolidDollarCircle } from "react-icons/bi";

function Section2(props) {
    return (
        <section className="flex flex-column">
            <div id="left-section" className="w-fit gap-8 grid grid-cols-2 grid-rows-2">
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                </div>
            <div id="right-section" className="">
                <div className="grid grid-cols-2 grid-rows-1">
                    <h1 className="text-5xl text-[#3A8CB1]">About<br />the Property</h1>
                    <div>
                        <BiSolidDollarCircle className="text-8xl text-[#BFB47A]" />
                        <h2>Offered at<br />$1,000,000</h2>
                    </div>
                </div>
                
                <div className="w-[90rem]">
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ducimus est numquam cupiditate animi, iste inventore! Quas tempora quibusdam inventore sint exercitationem? Animi delectus nesciunt quibusdam assumenda error eius obcaecati nisi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ducimus est numquam cupiditate animi, iste inventore! Quas tempora quibusdam inventore sint exercitationem? Animi delectus nesciunt quibusdam assumenda error eius obcaecati nisi.</p>
                </div>
                <div className="flex font-bold w-[90rem]">
                    <button className="font-bold">Read More <SlArrowRight /></button>
                    <button>Brochure <BsDownload /></button>
                </div>
            </div>
        </section>
      );
}

export default Section2;