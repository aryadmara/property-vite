import { BsFillHousesFill } from "react-icons/bs";
import { PiLighthouse } from "react-icons/pi";


function hero() {
    return ( 
        <div className=" bg-[url('https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover flex flex-col justify-center  w-full h-[800px] bg-no-repeat bg-center  ">
            <h1 className=" mt-12 text-6xl text-center align-middle text-white ">567 Mottson Lane</h1>
            <h1 className="  mt-12 text-3xl text-center align-middle text-white ">Beach Ville, CA 12345</h1>
            <div className=" flex flex-col mt-64 justify-center items-center ">
                <span className=" bg-black p-8 rounded-full opacity-75"><PiLighthouse className="w-12 h-12 text-white " /></span>
            <h1 className="  mt-12 text-1xl text-center align-middle text-white  ">View Virtual Tour</h1>
            </div>
        </div>
    )
}

export default hero;