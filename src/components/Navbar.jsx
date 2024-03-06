function Navbar() {

    return (  
        <header className=" absolute w-[80rem] m-auto left-0 right-0 my-7 flex items-center justify-between  text-white">
        <h2 className=" text-2xl"><span className=" font-extrabold">Rocket</span>lister</h2>
        <nav className=" bg-opacity-100 text-xs ">
            <a className = " m-5 hover:text-[#c9c9c9]" href="#">OVERVIEW</a>
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

