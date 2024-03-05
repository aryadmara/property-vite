import floorPlan from "../assets/rumah.png"

function Floor() {
    return ( 
        <div className="w-full h-[700px] border bg-[#f4f4f4] flex flex-col ">
            <h1 className="text-4xl text-center m-16 text-[#486e81] ">Floor Plans</h1>
            <div className="flex justify-center border-b-2 border-t-2 py-3 mx-44">
                <h1 className=" text-sm px-7 text-[#486e81]">FLOOR ONE</h1>
                <h1 className=" text-sm px-7 text-[#c9c9c9]">FLOOR TWO</h1>
            </div>
                <div className="flex justify-center m-5">
                <img src={floorPlan} alt="" className="w-96 h-96" />
                </div>
        </div>
     );
}

export default Floor;