import PhotoComponent from "../components/Photo";
import { FaWhatsapp } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function Section8() {
    return (
        <section className="flex h-[44rem]">

            <div className="">
                <header className="text-3xl text-[#3A8CB1] mx-40 font-bold mb-12">Listing Presented by <br />Joe Agent</header>
                <div id="photo-1" class="ml-40 w-[20rem] grid grid-cols-2 gap-4 mb-12">
                    <PhotoComponent url="https://as1.ftcdn.net/v2/jpg/03/33/86/90/1000_F_333869058_1H9me2PhuAGBtdxyjwjKj6N4XpEgFR56.jpg" className="object-left row-span-6 col-start-1 row-start-2 " />
                    <div id="biodata1">
                        <h1 className="col-start-2 row-start-2 h-10 text-2xl font-bold">Robert Luice</h1>
                        <p className="col-start-2 row-start-3 font-bold">Lead Broker</p>
                        <h1 className="col-start-2 row-start-4">Keller Williams</h1>
                        <div className="flex col-start-2 row-start-5 text-[#3A8CB1]">
                            <FaWhatsapp classname="text-[#3A8CB1]" />480-255-0911
                        </div>
                        <div className="flex col-start-2 row-start-6 text-[#3A8CB1]">
                            <ImMail4 classname="text-[#3A8CB1]" />joe@williams.com
                        </div>

                        <p className="col-start-2 row-start-7">License number - RE1234567</p>
                        <h1 className="col-start-2 row-start-8 font-bold">Website</h1>
                    </div>
                </div>

                <div id="photo-2" class="ml-40 w-[22rem] grid grid-cols-2 gap-4">
                    <PhotoComponent url="https://previews.123rf.com/images/nyul/nyul1102/nyul110200529/8782831-pretty-office-worker-girl-sitting-at-desk-looking-at-computer-screen-smiling.jpg" className="row-span-6 col-start-1 row-start-2  border-red-400" />
                    <div id="biodata2">
                        <h1 className="col-start-2 row-start-2 h-10 text-2xl font-bold">Annu Madera</h1>
                        <p className="col-start-2 row-start-3">Lead Broker</p>
                        <h1 className="col-start-2 row-start-4 font-bold">Keller Williams</h1>
                        <div className="flex col-start-2 row-start-5 text-[#3A8CB1]">
                            <FaWhatsapp classname="text-[#3A8CB1]" />480-255-0911
                        </div>
                        <div className="flex col-start-2 row-start-6 text-[#3A8CB1]">
                            <ImMail4 classname="text-[#3A8CB1]" />annu@madera.com
                        </div>

                        <p className="col-start-2 row-start-7">License number - RE1234567</p>
                        <h1 className="col-start-2 row-start-8 font-bold">Website</h1>
                    </div>
                </div>
            </div>

            <div id="right-section" className="relative -top-16 bg-[#f4f4f4c5] w-full h-[48rem] pt-[6rem] pl-20 ml-20">
                <form className="flex flex-col">
                    <h1 className="text-4xl text-[#3A8CB1] font-light pt-10 mb-10">Get in Touch</h1>
                    
                    <div className="flex gap-[16rem] mb-10 w-[40rem]">
                        <label>First*</label>
                        <label>Last*</label>
                    </div>

                    <div className="">
                        <input type="text" name="first-name" className="bg-transparent outline-none border-black border-b w-[16rem] z-10"/>
                        <input type="text" name="last-name" className="bg-transparent outline-none border-black border-b ml-10 w-[16.5rem] z-10 "/>
                    </div>

                    <label className="my-3">Email*</label>
                    <input type="text" name="email" className="bg-transparent outline-none border-black border-b w-[35rem] mt-3 z-10" />

                    <label className="my-3">Phone#</label>
                    <input type="text" name="phone" className="bg-transparent outline-none border-black border-b w-[35rem] mt-3 z-10"  />

                    <label className="my-3">Your Message</label>
                    <input type="text" name="message" className="bg-transparent outline-none border-black border-b w-[35rem] mt-3 mb-6 z-10"  />

                    <div className="flex my-10"><button className="bg-[#3A8CB1] text-white w-40 h-10">Send Inquiry</button><button className="bg-[#3A8CB1] text-white ml-[15rem] w-40 h-10">Schedule a Tour</button></div>

                </form>

            </div>
        </section>
    );
}

export default Section8;