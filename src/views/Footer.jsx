import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiSolidTachometer } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";


function footer() {
    return ( 
        <div className="flex mx-60 my-20">
            <div className="flex-[2] ">
            <h2 className=" text-2xl "><span className=" font-extrabold text-[#3A8CB1]">Rocket</span><span className="text-[#486e81]">lister</span></h2>
            <p className="text-xs mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo aut ipsum quia expedita? Laborum maiores impedit exercitationem reprehenderit eos blanditiis minima voluptatum dignissimos natus, debitis est veritatis iste repudiandae nesciunt hic voluptate repellat optio error cupiditate expedita. Tempora quidem nemo reiciendis similique quibusdam atque ad ipsum temporibus aspernatur? Tempore, cupiditate odio ea quasi harum repudiandae adipisci quas quam temporibus quis laboriosam aut eveniet asperiores quisquam perferendis quo dolore cum ducimus animi, aperiam accusantium doloremque? Numquam sint cum fuga saepe.   </p>
            <section className="flex mt-3">
                <TiSocialFacebook className="bg-[#3A8CB1] w-6 h-6 rounded-full text-white mr-2"/>
                <TiSocialTwitter className="bg-[#3A8CB1] w-6 h-6 rounded-full text-white mr-2"/>
                <TiSocialYoutube className="bg-[#3A8CB1] w-6 h-6 rounded-full text-white mr-2"/>
                <TiSocialLinkedin className="bg-[#3A8CB1] w-6 h-6 rounded-full text-white mr-2"/>

            </section>
            </div>
            <div className="flex-1 pl-11 ">
                <h2 className="text-2xl text-[#3A8CB1] ">567 Mottson Lane</h2>
                <h4 className="text-sm mt-2">Beach Ville, CA 12345</h4>
                <h4 className="text-sm mt-4">Powered By: <span className=" font-extrabold text-[#3A8CB1]">Rocket</span><span className="text-[#486e81]">lister</span></h4>
                <section className="flex mt-3">
                <BiSolidTachometer className="w-7 h-7  text-[#3A8CB1] mr-2" />
                <AiFillAppstore className="w-7 h-7  text-[#3A8CB1] mr-2" />

            </section>
            </div>
        </div>
     );
}
// Merubah warna dan membuat views maps
export default footer;