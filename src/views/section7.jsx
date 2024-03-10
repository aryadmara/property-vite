  
  import { FaSquare } from "react-icons/fa";
  import Graph from "../assets/graph.png"
 
 
 
 function SectionCalculator(){
  return(
    <>
      <div className="py-8 md:py-16 md:flex items-center relative h-[1500px] md:h-fit">
        <div className=" w-fit md:w-[60rem] px-4 md:py-0 h-[260px] md:h-[50rem]">
          <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="h-full w-auto object-cover"
            alt="" 
          />
        </div>
        <div className="h-[40rem] w-full absolute flex justify-end items-center md:pl-[40rem]">
          <div className="w-[80rem] h-[36rem] bg-white md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:pt-8">
          <div className="mb-4 md:mb-0 h-[5rem]">
            <h3 className="font-semibold text-[#3A8CB1] text-center md:text-left text-4xl pt-6 md:px-14">Mortgage Calculator</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-0 md:gap-14 md:h-[30rem] md:px-14">
            <div className=" flex-2 flex flex-col gap-10 md:gap-0">
              <div className="h-[50%] justify-center content-center flex">
                <span><img src={Graph} alt="" className=" h-[300px] md:h-full items-center"/></span>
              </div>

              <div className="h-[10%] flex items-center justify-around text-xs">
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
            
              <div className="h-[40%] flex flex-col pb-0 md:pb-7 justify-end">
                <div className="flex-1 flex flex-col justify-end items-center md:mb-7">
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

            <div className="flex-1 flex flex-col justify-start md:justify-end items-center mb-7 pb-7">
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
              <button className="bg-[#FF7311] rounded-md px-4 py-2 w-80 text-white mb-1 mt-5 md:mt-2">Calculate</button>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </> 
  )
 }

 export default SectionCalculator