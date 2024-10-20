import React from 'react'
import { GoGoal } from "react-icons/go";
import articeImg from '../assets/quality2.jpg'
import { IoPersonAddSharp,IoChatbubbles} from "react-icons/io5";
import { FaEye } from "react-icons/fa";


const Articles = () => {
  return (
    <div className=' my-[50px]'>
        <div className=" container">
            <div className="">
                <p className=' font-Dm-sans font-medium text-[20px] text-Agency-blu flex justify-center gap-x-2 items-center'> 
                    <GoGoal className=' text-Agency-liniar'/> Our Blog</p>
                <h2 className=' font-Dm-sans font-bold text-[46px] text-black text-center'>Latest Blogs & Articles</h2>
            </div>
            <div className=" flex justify-between items-center">
                <div className="w-[32%]">
                    <div className="  bg-[#F4F4FF] rounded-[20px]">
                        <div className=" w-full h-[250px]">
                            <img src={articeImg} className=' w-full h-full rounded-[20px]' alt="" />
                        </div>
                        <div className=" p-[15px]">
                            <div className=" flex gap-x-4 items-center my-3">
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><IoPersonAddSharp/> by Admin</h3>
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><IoChatbubbles/> 25</h3>
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><FaEye/> 120 Views</h3>
                            </div>
                            <h3 className=' font-Dm-sans font-medium text-[25px] text-black hover:text-Agency-blu duration-300 underline'>Successful business partner have a meeting and discussing</h3>
                        </div>
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="  bg-[#F4F4FF] rounded-[20px]">
                        <div className=" w-full h-[250px]">
                            <img src={articeImg} className=' w-full h-full rounded-[20px]' alt="" />
                        </div>
                        <div className=" p-[15px]">
                            <div className=" flex gap-x-4 items-center my-3">
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><IoPersonAddSharp/> by Admin</h3>
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><IoChatbubbles/> 25</h3>
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><FaEye/> 120 Views</h3>
                            </div>
                            <h3 className=' font-Dm-sans font-medium text-[25px] text-black hover:text-Agency-blu duration-300 underline'>Successful business partner have a meeting and discussing</h3>
                        </div>
                    </div>
                </div>
                <div className="w-[32%]">
                    <div className="  bg-[#F4F4FF] rounded-[20px]">
                        <div className=" w-full h-[250px]">
                            <img src={articeImg} className=' w-full h-full rounded-[20px]' alt="" />
                        </div>
                        <div className=" p-[15px]">
                            <div className=" flex gap-x-4 items-center my-3">
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><IoPersonAddSharp/> by Admin</h3>
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><IoChatbubbles/> 25</h3>
                                <h3 className=' font-Dm-sans font-normal text-[16px] text-[#6B6161] flex items-center gap-x-2 '><FaEye/> 120 Views</h3>
                            </div>
                            <h3 className=' font-Dm-sans font-medium text-[25px] text-black hover:text-Agency-blu duration-300 underline'>Successful business partner have a meeting and discussing</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles