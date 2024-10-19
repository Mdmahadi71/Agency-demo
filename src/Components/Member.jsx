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
            <div className=" flex justify-between items-center">
                <div className="w-[24%]">
                    <div className=" border-[2px] border-gray-400 p-[10px] rounded-[20px] relative group overflow-hidden">
                        <div className=" h-[300px]">
                            <img src={memberImg} className=' w-full h-full rounded-[20px] ' alt="" />
                        </div>
                       <div className=" h-[100px]">
                       <div className=" text-center my-[10px] group-hover:hidden duration-300">
                            <h2 className=' font-Dm-sans font-medium text-[20px] text-black'>Robert Sions</h2>
                            <p className=' font-Nunito font-normal text-[16px] text-black'>Business Consultant</p>
                        </div>

                        <div className=" flex items-center gap-x-3 justify-center absolute  bottom-[-50px] group-hover:bottom-[30px] left-[50%] transform translate-x-[-50%] duration-300">
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                              <FaFacebookF/>
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaLinkedin />
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaYoutube />
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaTwitter />
                            </div>
                        </div>
                       </div>

                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" border-[2px] border-gray-400 p-[10px] rounded-[20px] relative group overflow-hidden">
                        <div className=" h-[300px]">
                            <img src={memberImg} className=' w-full h-full rounded-[20px] ' alt="" />
                        </div>
                       <div className=" h-[100px]">
                       <div className=" text-center my-[10px] group-hover:hidden duration-300">
                            <h2 className=' font-Dm-sans font-medium text-[20px] text-black'>Robert Sions</h2>
                            <p className=' font-Nunito font-normal text-[16px] text-black'>Business Consultant</p>
                        </div>

                        <div className=" flex items-center gap-x-3 justify-center absolute  bottom-[-50px] group-hover:bottom-[30px] left-[50%] transform translate-x-[-50%] duration-300">
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                              <FaFacebookF/>
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaLinkedin />
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaYoutube />
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaTwitter />
                            </div>
                        </div>
                       </div>

                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" border-[2px] border-gray-400 p-[10px] rounded-[20px] relative group overflow-hidden">
                        <div className=" h-[300px]">
                            <img src={memberImg} className=' w-full h-full rounded-[20px] ' alt="" />
                        </div>
                       <div className=" h-[100px]">
                       <div className=" text-center my-[10px] group-hover:hidden duration-300">
                            <h2 className=' font-Dm-sans font-medium text-[20px] text-black'>Robert Sions</h2>
                            <p className=' font-Nunito font-normal text-[16px] text-black'>Business Consultant</p>
                        </div>

                        <div className=" flex items-center gap-x-3 justify-center absolute  bottom-[-50px] group-hover:bottom-[30px] left-[50%] transform translate-x-[-50%] duration-300">
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                              <FaFacebookF/>
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaLinkedin />
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaYoutube />
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaTwitter />
                            </div>
                        </div>
                       </div>

                    </div>
                </div>
                <div className="w-[24%]">
                    <div className=" border-[2px] border-gray-400 p-[10px] rounded-[20px] relative group overflow-hidden">
                        <div className=" h-[300px]">
                            <img src={memberImg} className=' w-full h-full rounded-[20px] ' alt="" />
                        </div>
                       <div className=" h-[100px]">
                       <div className=" text-center my-[10px] group-hover:hidden duration-300">
                            <h2 className=' font-Dm-sans font-medium text-[20px] text-black'>Robert Sions</h2>
                            <p className=' font-Nunito font-normal text-[16px] text-black'>Business Consultant</p>
                        </div>

                        <div className=" flex items-center gap-x-3 justify-center absolute  bottom-[-50px] group-hover:bottom-[30px] left-[50%] transform translate-x-[-50%] duration-300">
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                              <FaFacebookF/>
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaLinkedin />
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaYoutube />
                            </div>
                            <div className=" border-[1px] border-Agency-blu p-[10px] rounded-[50%] hover:bg-Agency-blu hover:text-white duration-300">
                            <FaTwitter />
                            </div>
                        </div>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member