import { BsFillHousesFill } from "react-icons/bs";
import { PiLighthouse } from "react-icons/pi";


function hero() {
    return ( 

        <div className=" bg-[url('https://images.adsttc.com/media/images/5bcd/320f/f197/cc4e/4000/0155/slideshow/Peny_RenAi_penthouse-195.jpg?1540174342')] bg-cover flex flex-col justify-center  w-full h-[800px] bg-no-repeat bg-center  ">
            <h1 className=" text-3xl md:text-6xl mt-12 text-center align-middle text-white ">567 Mottson Lane</h1>
            <h1 className=" mt-12 text-xl md:text-3xl text-center align-middle text-white ">Beach Ville, CA 12345</h1>
            <div className=" flex flex-col mt-64 justify-center items-center ">
                <span className={`bg-black p-8 rounded-full opacity-75 cursor-pointer hover:bg-[#ff7311] `}><PiLighthouse className="w-12 h-12 text-white " /></span>
            <h1 className="  mt-12 text-1xl text-center align-middle text-white  cursor-pointer hover:text-[#c9c9c9]">View Virtual Tour</h1>
            </div>
        </div>
    )
}

export default hero;