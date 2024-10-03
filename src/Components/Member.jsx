import React from 'react'
import { GoGoal } from "react-icons/go";
import memberImg from '../assets/member.jpg'
import { FaFacebookF ,FaLinkedin ,FaYoutube ,FaTwitter } from "react-icons/fa";
const Member = () => {
  return (
    <div className=' my-[50px]'>
        <div className=" container">
            <div className="">
                <p className=' font-Dm-sans font-normal text-[20px] text-black flex justify-center  items-center gap-x-[10px] '><GoGoal className=' text-[20px] text-Agency-liniar'/>Team Member</p>
                <h3 className=' font-Nunito text-[46px] text-black font-bold text-center'>Creative Team Member</h3>
            </div>
            <div className="">
                <div className="w-[24%]">
                    <div className=" border-[2px] border-gray-400 p-[10px] rounded-[20px] group overflow-hidden">
                        <div className=" h-[300px]">
                            <img src={memberImg} className=' w-full h-full rounded-[20px] ' alt="" />
                        </div>
                        <div className=" text-center my-[10px]">
                            <h2 className=' font-Dm-sans font-medium text-[20px] text-black'>Robert Sions</h2>
                            <p className=' font-Nunito font-normal text-[16px] text-black'>Business Consultant</p>
                        </div>
                        <div className=" flex items-center gap-x-3 justify-center bottom-[40px] ">
                            <FaFacebookF/>
                            <FaLinkedin />
                            <FaYoutube />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member