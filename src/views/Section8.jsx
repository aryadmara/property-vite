import PhotoComponent from "../components/Photo";
import { FaWhatsapp } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

function Section8() {
    return ( 
        <section className="">
            <header className="text-5xl text-[#3A8CB1] font-bold">Listing Presented by <br />Joe Agent</header>
            <PhotoComponent className="float-start"/>
            <div className="">
                <h1>Robert Luice</h1>
                <p>Lead Broker</p>
                <h1>Keller Williams</h1>
                <div className="flex"><FaWhatsapp />480-255-0911</div>
                <div className="flex"><ImMail4 />joe@kellerwilliams.com</div>
                <p>License number - RE1234567</p>
                <h1 className="font-bold">Website</h1>
            </div>
        </section>
     );
}

export default Section8;