import PhotoComponent from "../components/Photo";
import { FaWhatsapp } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function Section8() {
    return (
        <section className="flex flex-col md:flex-row">

            <div className="">
                <header className="text-3xl text-[#3A8CB1] ml-3 md:mx-40 font-bold mb-12">Listing Presented by <br />Joe Agent</header>
                <div id="photo-1" className="ml-3 md:ml-40 w-[22rem] grid grid-cols-2 gap-4 mb-12">
                    <PhotoComponent url="https://as1.ftcdn.net/v2/jpg/03/33/86/90/1000_F_333869058_1H9me2PhuAGBtdxyjwjKj6N4XpEgFR56.jpg" className="object-left row-span-6 col-start-1 row-start-2 " />
                    <div id="biodata1">
                        <h1 className="col-start-2 row-start-2 h-10 text-2xl font-bold">Robert Luice</h1>
                        <p className="col-start-2 row-start-3 font-bold">Lead Broker</p>
                        <h1 className="col-start-2 row-start-4">Keller Williams</h1>
                        <div className="flex col-start-2 row-start-5 text-[#3A8CB1]">
                            <FaWhatsapp className="text-[#3A8CB1]" />480-255-0911
                        </div>
                        <div className="flex col-start-2 row-start-6 text-[#3A8CB1]">
                            <ImMail4 className="text-[#3A8CB1]" />joe@williams.com
                        </div>

                        <p className="col-start-2 row-start-7">License number - RE1234567</p>
                        <h1 className="col-start-2 row-start-8 font-bold">Website</h1>
                    </div>
                </div>

                <div id="photo-2" className="ml-3 md:ml-40 w-[22rem] grid grid-cols-2 gap-4">
                    <PhotoComponent url="https://previews.123rf.com/images/nyul/nyul1102/nyul110200529/8782831-pretty-office-worker-girl-sitting-at-desk-looking-at-computer-screen-smiling.jpg" className="row-span-6 col-start-1 row-start-2  border-red-400" />
                    <div id="biodata2">
                        <h1 className="col-start-2 row-start-2 h-10 text-2xl font-bold">Annu Madera</h1>
                        <p className="col-start-2 row-start-3">Lead Broker</p>
                        <h1 className="col-start-2 row-start-4 font-bold">Keller Williams</h1>
                        <div className="flex col-start-2 row-start-5 text-[#3A8CB1]">
                            <FaWhatsapp className="text-[#3A8CB1]" />480-255-0911
                        </div>
                        <div className="flex col-start-2 row-start-6 text-[#3A8CB1]">
                            <ImMail4 className="text-[#3A8CB1]" />annu@madera.com
                        </div>

                        <p className="col-start-2 row-start-7">License number - RE1234567</p>
                        <h1 className="col-start-2 row-start-8 font-bold">Website</h1>
                    </div>
                </div>
            </div>

            <div id="right-section" className="bg-[#f4f4f4c5] my-10 md:my-0 md:-mt-[20rem] w-fit md:w-full py-5 md:h-[62rem] pt-5 md:pt-[24rem] px-5 md:px-5 mx-3 md:mx-0 md:pl-20 md:ml-20">
                <form className="flex flex-col w-fit md:w-[38rem] md:px-5">
                    <h1 className="text-4xl text-[#3A8CB1] font-light pt-0 md:pt-10 mb-10">Get in Touch</h1>
                    <div className="flex gap-5">
                        <div className="flex flex-col w-6/12">
                            <label className="">First*</label>
                            <input type="text" name="first-name" className="bg-transparent outline-none border-black border-b w-full py-3"/>
                        </div>
                        <div className="flex flex-col w-6/12">
                            <label className="">Last*</label>
                            <input type="text" name="last-name" className="bg-transparent outline-none border-black border-b w-full py-3"/>
                        </div>
                    </div>
                    <label className="my-3">Email*</label>
                    <input type="text" name="email" className="bg-transparent outline-none border-black border-b w-full mt-3 " />

                    <label className="my-3">Phone#</label>
                    <input type="text" name="phone" className="bg-transparent outline-none border-black border-b w-full mt-3"  />

                    <label className="my-3">Your Message</label>
                    <input type="text" name="message" className="bg-transparent outline-none border-black border-b w-full mt-3 mb-6"  />

                    <div className="flex justify-between my-3 md:my-10">
                        <button className="bg-[#3A8CB1] text-white w-32 md:w-40 h-10">Send Inquiry</button>
                        <button className="bg-[#3A8CB1] text-white ml-[0rem] md:ml-[15rem] w-32 md:w-40 h-10">Schedule a Tour</button>
                    </div>

                </form>

            </div>
        </section>
    );
}

export default Section8;