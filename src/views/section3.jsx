import { HiOutlineSquares2X2 } from "react-icons/hi2";

function SectionPhoto(){

  return (
    <>
 
    <div className="flex flex-col md:flex-row gap-6 py-16">
      {/* left section */}
      <div className="flex-1">
        <div className="flex mb-9 items-center mx-4">
          <div className="border-b border-gray-400 w-[40%] h-16 hidden md:block "></div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-end ">
              <p className=" w-50 md:w-48 text-[#3A8CB1] text-4xl md:text-6xl font-extrabold">Photo <span className="font-medium">Gallery</span></p>
              <div className="flex  items-center gap-2">
                <span className="text-[#3A8CB1]"><HiOutlineSquares2X2 /></span>
                <p>view all 30 photos</p>
              </div>
          </div>
        </div>
        <div className="md:h-[32rem] overflow-hidden md:pl-[6rem] px-4 md:px-0 ">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="hover:shadow-2xl h-full w-fit object-cover"
          alt="" />
        </div>
      </div>
      {/* right section */}
      <div className="flex-1">
        <div className=" flex-1 h-64 mb-6 flex md:gap-6">
          <div className="w-0 md:w-[40%] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="hidden md:block h-full w-fit object-cover"
            />
          </div>
          <div className="overflow-hidden px-4 md:px-0">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="h-full w-fit object-cover"
            />
          </div>
        </div>
        <div className="overflow-hidden w-full  md:w-fit flex-1 h-[]256px md:h-[32rem] mr-24 px-4 md:px-0" >
          <img 
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt=""
            className="h-full w-fit bg-cover"
          />
        </div>
      </div>
    </div>
    </>
  )

}

export default SectionPhoto