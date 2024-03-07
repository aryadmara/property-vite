  import { FaSquare } from "react-icons/fa";
  import Graph from "../assets/graph.png"
 
 
 
 function SectionCalculator(){
  return(
    <>   
      <div className=" w-full py-16 items-center justify-end overflow-hidden relative flex justify-between">
        <div className="w-[60rem] bg-red-400 h-[50rem]">
          <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="h-full w-auto object-cover"
            alt="" 
          />
        </div>
        <div className="h-[40rem] w-full absolute flex justify-end pl-[40rem]">
        <div className="w-[80rem] h-[36rem] z-0 overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] pt-8">
          <div className=" h-[5rem]">
            <h3 className="font-semibold text-[#3A8CB1] text-4xl pt-6 px-14">Mortgage Calculator</h3>
          </div>
          <div className=" flex gap-14 h-[30rem] px-14">
            <div className=" flex-2 flex flex-col">
              <div className="h-[50%] justify-center content-center flex">
                <span><img src={Graph} alt="" className="h-full items-center"/></span>
              </div>

              <div className="h-[10%] flex items-center gap-1 justify-between text-xs">
                <div className="flex items-center gap-1">
                  <span className="text-[#FF7311]"><FaSquare /></span> 
                  <p>Principal and Interest</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#1C6CAB]"><FaSquare /></span> 
                  <p>Property Tax</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#A4C0E5]"><FaSquare /></span> 
                  <p>HOA Fee</p>
                </div>
              </div>
            
              <div className="h-[40%] flex flex-col pb-7">
                <div className="flex-1 flex flex-col justify-end mb-7">
                  <div className="h-[4rem]">
                    <p className="mb-1 font-medium">Principal and Interest</p>
                    <input type="text" className="w-80 h-8 rounded bg-gray-100 border border-gray-300 mb-1" />
                  </div>
                  <div className="h-[4rem]">
                    <p className="mb-1 font-medium">Homeowners Association Feet</p>
                    <input type="text" className="w-80 h-8 rounded bg-gray-100 border border-gray-300 mb-1" />
                  </div>
                </div>

              </div>
            </div>

            <div className="flex-1 flex flex-col justify-end mb-7 pb-7">
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Principal and Interest</p>
                <input type="text" className="w-80 h-8 rounded bg-gray-100 border border-gray-300 mb-1" />
              </div>
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Homeowners Association Feet</p>
                <input type="text" className="w-80 h-8 rounded bg-gray-100 border border-gray-300 mb-1" />
              </div>
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Principal and Interest</p>
                <input type="text" className="w-80 h-8 rounded bg-gray-100 border border-gray-300 mb-1" />
              </div>
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Term (*in years)</p>
                <input type="text" className="w-80 h-8 rounded bg-gray-100 border border-gray-300 mb-1" />
              </div>
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Interest</p>
                <input type="text" className="w-80 h-8 rounded bg-gray-100 border border-gray-300 mb-1"  />
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>

        

      
      {/* <div className="flex py-16 items-center justify-end overflow-hidden">
        <div className="w-[90rem] bg-red-400 h-[50rem]">
          <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="h-full w-auto object-cover"
            alt="" 
          />
        </div>
        <div className="w-[80rem] h-[40rem] z-0 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] pt-8">
          <div className=" h-[5rem]">
            <h3 className="font-semibold text-[#3A8CB1] text-4xl pt-6 px-5">Mortgage Calculator</h3>
          </div>
          <div className=" flex gap-4 h-[30rem] px-5">
            <div className=" flex-2 flex flex-col">
              <div className="h-[50%] justify-center content-center flex">
                <span><img src={Graph} alt="" className="h-full items-center"/></span>
              </div>

              <div className="h-[10%] flex items-center gap-1 justify-between text-xs">
                <div className="flex items-center gap-1">
                  <span className="text-[#FF7311]"><FaSquare /></span> 
                  <p>Principal and Interest</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#1C6CAB]"><FaSquare /></span> 
                  <p>Property Tax</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#A4C0E5]"><FaSquare /></span> 
                  <p>HOA Fee</p>
                </div>
              </div>
            
              <div className="h-[40%] flex flex-col pb-7">
                <div className="flex-1 flex flex-col justify-end mb-7">
                  <div className="h-[4rem]">
                    <p className="mb-1 font-medium">Principal and Interest</p>
                    <input type="text" className="w-72 h-8 rounded bg-gray-100 border border-gray-300 mb-1" value="" />
                  </div>
                  <div className="h-[4rem]">
                    <p className="mb-1 font-medium">Homeowners Association Feet</p>
                    <input type="text" className="w-72 h-8 rounded bg-gray-100 border border-gray-300 mb-1" value="" />
                  </div>
                </div>

              </div>
            </div>

            <div className="flex-1 flex flex-col justify-end mb-7 pb-7">
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Principal and Interest</p>
                <input type="text" className="w-72 h-8 rounded bg-gray-100 border border-gray-300 mb-1" value="" />
              </div>
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Homeowners Association Feet</p>
                <input type="text" className="w-72 h-8 rounded bg-gray-100 border border-gray-300 mb-1" value="" />
              </div>
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Principal and Interest</p>
                <input type="text" className="w-72 h-8 rounded bg-gray-100 border border-gray-300 mb-1" value="" />
              </div>
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Term (*in years)</p>
                <input type="text" className="w-72 h-8 rounded bg-gray-100 border border-gray-300 mb-1" value="" />
              </div>
              <div className="h-[4rem]">
                <p className="mb-1 font-medium">Interest</p>
                <input type="text" className="w-72 h-8 rounded bg-gray-100 border border-gray-300 mb-1" value="" />
              </div>
            </div>
          </div>
          
        </div>

      </div> */}
    </> 
  )
 }

 export default SectionCalculator