import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
function Navbar() {
    const [view, setView] = useState ("visible md:visible")
    // const [name, setName] = useState (`yaya toure`)
    const handleHidden = () =>{
        setView ("invisible md:invisible");
        // setName (`Pogba`)
    }
    return (  
        <header className=" absolute  w-full md:w-[80rem] m-auto left-0 right-0 my-7 flex items-center justify-between  text-white ">
            {/* <p>{name}</p> */}
        <div className={`${view} text-black bottom-24 right-4 fixed bg-white shadow rounded-t-lg rounded-l-lg z-50`} > 
            <button className=" absolute -top-2 right-2 " type="button" onClick={handleHidden} ><IoCloseCircleSharp  className=" text-red-600 fixed bg-white rounded-full" /></button>
            <p className=" text-sm p-6 ">Hi!👋 <br />Kamu bisa menghubungi <br /> kami via WhatsApp</p>
        </div>
        <div  className=" bottom-4 right-4 fixed bg-[#4eca5c] rounded-full p-4 z-50 cursor-pointer">
            <span className="  rounded-full">
            <a href="https://www.purwadhika.com/"><FaWhatsapp className="  w-8 h-8"/></a>
                </span>
        </div>
        <h2 className=" pl-4 md:pl-0 text-2xl cursor-pointer"><span className=" font-extrabold">Rocket</span>lister</h2>
        <nav className=" hidden md:block bg-opacity-100 text-xs ">
            <a className = " m-5 hover:text-[#c9c9c9] " href="#">OVERVIEW</a>
            <a className = " m-5 hover:text-[#c9c9c9]"href="#">PHOTOS</a>
            <a className = " m-5 hover:text-[#c9c9c9]"href="#">TOURS</a>
            <a className = " m-5 hover:text-[#c9c9c9]"href="#">AMENITIES</a>
            <a className = " m-5 hover:text-[#c9c9c9]"href="#">PAYMENT</a>
            <a className = " m-5 hover:text-[#c9c9c9]"href="#">CONTACT</a>
            <a className = " m-5 hover:text-[#c9c9c9]"href="#">MAP</a>
        </nav>
    </header>
    );
}
// // header{
//     padding: 20px 200px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #ffffff;
//     color: #000000;
//     /* border: 4px solid red; */

// }
// #logo{
//     font-size: 40px;
// }
// #navbar a {
//     text-decoration: none;
//     padding: 6px 15px;
//     border-radius: 20px;
//     margin: 0 10px;
//     color: #000000;
// }
// #navbar a:hover {
//     color: rgb(195, 195, 195);
// }
export default  Navbar;

