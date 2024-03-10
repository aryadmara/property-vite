import floorPlan from "../assets/rumah.png"
import floorPlan2 from "../assets/rumah-3.png"
import { useState } from "react";


function Floor() {
    const[floor, setFloor] = useState (floorPlan)
    const [selectedFloor, setSelectedFloor] = useState("FLOOR ONE");
    const gambarFloor = (klik) => {
        if (klik === "FLOOR TWO"){
            setFloor (floor === floorPlan ? floorPlan2 : floorPlan2)
            setSelectedFloor("FLOOR TWO")
        } else {
            setFloor(floorPlan)
            setSelectedFloor("FLOOR ONE")
        }
    }
    return ( 
        <div className="w-full h-[650px] md:h-[700px] border bg-[#f4f4f4] flex flex-col ">
            <h1 className="text-4xl text-center m-8 md:m-16 text-[#3A8CB1]  font-medium">Floor Plans</h1>
            <div className="flex justify-center border-b-2 border-t-2 py-3 mx-6 md:mx-44 cursor-pointer">
                <h1 className={`text-sm px-7 ${selectedFloor === "FLOOR ONE" ? "text-[#3A8CB1]" : "text-[#c9c9c9]"} hover:text-[#3A8CB1]`} 
                onClick={() =>gambarFloor("FLOOR ONE")}>FLOOR ONE</h1>
                <h1 className={`text-sm px-7 ${selectedFloor === "FLOOR TWO" ? "text-[#3A8CB1]" : "text-[#c9c9c9]"} hover:text-[#3A8CB1]`} 
                onClick={() =>gambarFloor("FLOOR TWO")}>FLOOR TWO</h1>
            </div>
                <div className="flex justify-center m-5 mt-12 md:mt-8">
                <img src={floor} alt="" className="w-96 h-96" />
                </div>
        </div>
     );
}
// Membuat hover untuk teks views Floor
// Menambah floor two dan responsive

export default Floor;