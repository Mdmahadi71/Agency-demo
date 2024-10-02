import React from 'react'
import { SiCairographics } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { TbWebhook } from "react-icons/tb";
import { IoCodeSlashSharp } from "react-icons/io5";

const Developerzoon = () => {
  return (
    <div className=' py-3'>
        <div className=" container">
            <div className=" flex justify-between items-center">
                <div className="w-[24%]">
                    <div className=" w-full h-[350px] bg-Agency-deve rounded-[20px] relative  ">
                        <div className=" absolute top-0 left-0 bg-Agency-blu rounded-tl-[20px] rounded-br-[40px] border-r-[5px] border-b-[5px] border-white w-[100px] h-[100px]">
                            <SiCairographics className=' mx-auto text-[40px] text-white top-[50%] transform translate-y-[50%] '/>
                        </div>
                    
                    <div className="  absolute bottom-0 left-0 p-5 bg-[#F4F4FF]">
                        <h2 className=' font-Dm-sans font-bold text-black text-[25px] hover:text-Agency-blu duration-300 '>Graphics Design</h2>
                        <p className=' font-Dm-sans font-medium text-[#6B6161] text-[16px] '>Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" w-full h-[350px] bg-Agency-deve rounded-[20px] relative  ">
                        <div className=" absolute top-0 left-0 bg-Agency-blu rounded-tl-[20px] rounded-br-[40px] border-r-[5px] border-b-[5px] border-white w-[100px] h-[100px]">
                            <IoCodeSlashSharp className=' mx-auto text-[40px] text-white top-[50%] transform translate-y-[50%] '/>
                        </div>
                    
                    <div className="  absolute bottom-0 left-0 p-5 bg-[#F4F4FF]">
                        <h2 className=' font-Dm-sans font-bold text-black text-[25px] hover:text-Agency-blu duration-300 '>Web Developer</h2>
                        <p className=' font-Dm-sans font-medium text-[#6B6161] text-[16px] '>Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" w-full h-[350px] bg-Agency-deve rounded-[20px] relative  ">
                        <div className=" absolute top-0 left-0 bg-Agency-blu rounded-tl-[20px] rounded-br-[40px] border-r-[5px] border-b-[5px] border-white w-[100px] h-[100px]">
                            <TbWebhook className=' mx-auto text-[40px] text-white top-[50%] transform translate-y-[50%] '/>
                        </div>
                    
                    <div className="  absolute bottom-0 left-0 p-5 bg-[#F4F4FF]">
                        <h2 className=' font-Dm-sans font-bold text-black text-[25px] hover:text-Agency-blu duration-300 '>Digital Marketing</h2>
                        <p className=' font-Dm-sans font-medium text-[#6B6161] text-[16px] '>Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.</p>
                    </div>
                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" w-full h-[350px] bg-Agency-deve rounded-[20px] relative  ">
                        <div className=" absolute top-0 left-0 bg-Agency-blu rounded-tl-[20px] rounded-br-[40px] border-r-[5px] border-b-[5px] border-white w-[100px] h-[100px]">
                            <MdOutlineDeveloperMode className=' mx-auto text-[40px] text-white top-[50%] transform translate-y-[50%] '/>
                        </div>
                    
                    <div className="  absolute bottom-0 left-0 p-5 bg-[#F4F4FF]">
                        <h2 className=' font-Dm-sans font-bold text-black text-[25px] hover:text-Agency-blu duration-300 '>App Design</h2>
                        <p className=' font-Dm-sans font-medium text-[#6B6161] text-[16px] '>Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.</p>
                    </div>
                    </div>
                </div>
                
               
            </div>
        </div>
    </div>
  )
}

export default Developerzoon