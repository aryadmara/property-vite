import { HiOutlineSquares2X2 } from "react-icons/hi2";

function SectionAmenities(){
  return(
    <>
    <div className="py-16">
      <div className="flex gap-3 items-center ">
        <div className="border-b border-gray-400 w-72 h-1 "></div>
        <div >
            <p className=" w-62 text-[#3A8CB1] text-[2.3rem] font-medium">Amenities</p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap px-72 gap-3 m-2">
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Beach Access</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">City Views</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Great School</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Heated Pool</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Large Kitchen</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Large Lot</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">New Construction</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Ocean Views</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Open Floor Plan</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Quiet and Private</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">Shopping Nearby</button>
        <button className="py-1.5 px-3.5 bg-[#F4F4F4] rounded">SpaGated Community</button>
      </div>
    </div>
    </>
  )
}

export default SectionAmenities