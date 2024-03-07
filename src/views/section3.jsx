import { HiOutlineSquares2X2 } from "react-icons/hi2";

function SectionPhoto(){

  return (
    <>
 
    <div className="flex gap-6 py-16">
      {/* left section */}
      <div className="flex-1">
        <div className="flex mb-9 items-center">
          <div className="border-b border-gray-400 w-[40%] h-16 "></div>
          <div className="w-[60%]">
            <div className="flex justify-end gap-12 items-end pr-10">
              <p className=" w-48 text-[#3A8CB1] text-6xl font-extrabold">Photo <span className="font-medium">Gallery</span></p>
              <div className="flex justify-between items-center gap-1">
                <span className="text-[#3A8CB1]"><HiOutlineSquares2X2 /></span>
                <p>view all 30 photos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[32rem] overflow-hidden pl-[6rem] hover:shadow-outline ">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="hover:shadow-2xl"
          alt="" />
        </div>
      </div>
      {/* right section */}
      <div className="flex-1">
        <div className=" flex-1 h-64 mb-6 flex gap-6">
          <div className=" w-[40%]  overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full"
            />
          </div>
          <div className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="h-full"
            />
          </div>
        </div>
        <div className="overflow-hidden flex-1 h-[32rem] mr-24" >
          <img 
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt=""
            className="h-full"
          />
        </div>
      </div>
    </div>
    </>
  )

}

export default SectionPhoto