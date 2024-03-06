import PhotoComponent from "../components/Photo";
import { FaWhatsapp } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function Section8() {
    return (
        <section className="flex">
            <div>
                <header className="text-5xl text-[#3A8CB1] mx-60 font-bold mb-12">Listing Presented by <br />Joe Agent</header>
                <div id="photo-1" class="mx-60 w-[30rem] grid grid-cols-2 gap-4 mb-12">
                    <PhotoComponent url="https://as1.ftcdn.net/v2/jpg/03/33/86/90/1000_F_333869058_1H9me2PhuAGBtdxyjwjKj6N4XpEgFR56.jpg"className="object-left row-span-6 col-start-1 row-start-2  border-red-400" />
                    <div>
                        <h1 className="col-start-2 row-start-2 h-10 text-2xl font-bold">Robert Luice</h1>
                        <p className="col-start-2 row-start-3 font-bold">Lead Broker</p>
                        <h1 className="col-start-2 row-start-4">Keller Williams</h1>
                        <div className="flex col-start-2 row-start-5 text-[#3A8CB1]"><FaWhatsapp classname="text-[#3A8CB1]" />480-255-0911</div>
                        <div className="flex col-start-2 row-start-6 text-[#3A8CB1]"><ImMail4 classname="text-[#3A8CB1]"/>joe@kellerwilliams.com</div>
                        <p className="col-start-2 row-start-7">License number - RE1234567</p>
                        <h1 className="col-start-2 row-start-8 font-bold">Website</h1>
                    </div>
                </div>
                <div id="photo-2" class="mx-60 w-[30rem] grid grid-cols-2 gap-4">
                    <PhotoComponent url="https://previews.123rf.com/images/nyul/nyul1102/nyul110200529/8782831-pretty-office-worker-girl-sitting-at-desk-looking-at-computer-screen-smiling.jpg"className="row-span-6 col-start-1 row-start-2  border-red-400" />
                    <div>
                        <h1 className="col-start-2 row-start-2 h-10 text-2xl font-bold">Annu Madera</h1>
                        <p className="col-start-2 row-start-3">Lead Broker</p>
                        <h1 className="col-start-2 row-start-4 font-bold">Keller Williams</h1>
                        <div className="flex col-start-2 row-start-5 text-[#3A8CB1]"><FaWhatsapp classname="text-[#3A8CB1]" />480-255-0911</div>
                        <div className="flex col-start-2 row-start-6 text-[#3A8CB1]"><ImMail4 classname="text-[#3A8CB1]"/>annu@madera.com</div>
                        <p className="col-start-2 row-start-7">License number - RE1234567</p>
                        <h1 className="col-start-2 row-start-8 font-bold">Website</h1>
                    </div>
                </div>
            </div>
            <div id="right-section" className="bg-[#f4f4f4c5] ml-0 w-[60rem] h-[55rem] py-40 pl-20">
                <h1 className="text-5xl text-[#3A8CB1] font-bold">Get in Touch</h1>
                <div className="flex gap-[16rem] my-10"><p>First*</p><p>Last*</p></div>
                <div className="flex">
                    <div className="border-black border-b w-[16rem]"></div>
                    <div className="border-black border-b w-[16rem] ml-10"></div>
                </div>
                <div className="my-10">Email*</div>
                <div className="border-black border-b w-[35rem]"></div>
                <div className="my-10">Phone#</div>
                <div className="border-black border-b w-[35rem]"></div>
                <div className="my-10">Your Message</div>
                <div className="border-black border-b w-[35rem]"></div>
                <div className="flex my-10"><button className="bg-[#3A8CB1] text-white w-40 h-10">Send Inquiry</button><button className="bg-[#3A8CB1] text-white ml-[15rem] w-40 h-10">Schedule a Tour</button></div>
            </div>
        </section>
    );
}

export default Section8;