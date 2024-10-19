import React from 'react'
import qualityImg from '../assets/quality1.jpg'
import qualityImg2 from '../assets/quality2.jpg'
import qualityImg3 from '../assets/quality3.jpg'
import { GoGoal } from "react-icons/go";
import worldImg from '../assets/worldImg.png'
import { FaCheckSquare } from "react-icons/fa";

const Quality = () => {
  return (
    <div>
        <div className=" container ">
            <div className=" flex justify-between items-center">
                <div className="w-[48%]">
                    <div className=" relative">
                        <div className=" w-[300px] h-[200px]">
                          <img src={qualityImg} className=' w-full h-full rounded-[20px]' alt="" />
                        </div>
                        <div className=" w-[200px] h-[200px] my-2">
                          <img src={qualityImg2} className=' w-full h-full rounded-[20px]' alt="" />
                        </div>
                          <div className=" absolute top-[50px] right-[130px] ">
                              <div className=" w-[200px] h-[350px] my-2 ">
                                  <img src={qualityImg3} className=' w-full h-full rounded-[20px] border-[7px] border-white' alt="" />
                              </div>
                          </div>
                    </div>
                </div>
                <div className="w-[48%]">
                  <p className=' font-Dm-sans font-normal text-[20px] text-black flex  items-center gap-x-[10px] '><GoGoal className=' text-[20px] text-Agency-liniar'/> Reason of Our Success</p>
                    <h2 className='font-Nunito font-bold text-[46px] text-black'>Quality & Experience Best Digital Agency</h2>

                    <div className=" flex justify-between items-center">
                        <h2 className=' font-Dm-sans font-medium text-[20px] text-Agency-Banner p-[10px] bg-[#F4F4FF] inline-block rounded-[15px] hover:bg-Agency-liniar hover:text-white duration-300 '>Our Mission</h2>
                        <h2 className=' font-Dm-sans font-medium text-[20px] text-Agency-Banner p-[10px] bg-[#F4F4FF] inline-block rounded-[15px] hover:bg-Agency-liniar hover:text-white duration-300 '>Our Vission</h2>
                        <h2 className=' font-Dm-sans font-medium text-[20px] text-Agency-Banner p-[10px] bg-[#F4F4FF] inline-block rounded-[15px] hover:bg-Agency-liniar hover:text-white duration-300 '>Our History</h2>
                    </div>

                    <p className=' font-Dm-sans font-normal text-[15px] text-Agency-Banner my-[10px]'>There are many variations of passages of Lorem Ipsum available, but the majori
                        suffered alteration in some form, by injected humour, or randomised word whic
                        look even sligh believable. If you are going to use.</p>
                    <div className=" flex justify-between items-center">
                        <div className="w-[48%]">
                            <img src={worldImg} alt="" />
                        </div>
                          <div className="w-[48%]">
                              <div className=" ">
                                  <p className=' font-Dm-sans font-normal text-[20px] text-black flex justify-center  items-center gap-x-[10px] '><FaCheckSquare className=' text-[20px] text-Agency-liniar' />Financial Growth System</p>
                                  <p className=' font-Dm-sans font-normal text-[20px] text-black flex justify-center  items-center gap-x-[10px] '><FaCheckSquare className=' text-[20px] text-Agency-liniar' />Financial Growth System</p>
                                  <p className=' font-Dm-sans font-normal text-[20px] text-black flex justify-center  items-center gap-x-[10px] '><FaCheckSquare className=' text-[20px] text-Agency-liniar' />Financial Growth System</p>
                                  <p className=' font-Dm-sans font-normal text-[20px] text-black flex justify-center  items-center gap-x-[10px] '><FaCheckSquare className=' text-[20px] text-Agency-liniar' />Financial Growth System</p>
                              </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quality