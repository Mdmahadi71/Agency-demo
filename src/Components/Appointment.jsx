import React from 'react'
import appoinImg from '../assets/reasonImg.jpg'
import vdoIcon from '../assets/vdoIcon.png'
import { GoGoal } from "react-icons/go";
import groupImg1 from '../assets/oneGropimg.png'

const Appointment = () => {
  return (
    <div className=' my-[100px]'>
        <div className=" container">
            <div className=" bg-Agency-blu w-full h-[600px] rounded-[20px] relative">
                <div className=" flex justify-between items-center px-[20px] py-[70px]">
                    <div className="w-[43%]">
                        <div className="  pt-[100px]  relative">
                          <img src={appoinImg} className=' w-[400px] h-[300px] mx-auto rounded-[20px]' alt="" />
                          <div className=" absolute top-[50%] left-[40%] transform ">
                                <img src={vdoIcon} alt="" />
                          </div>
                        </div>
                    </div>
                    <div className="w-[53%] ">
                      <div className="">
                        <p className=' font-Dm-sans font-normal text-[20px] text-white flex gap-x-2 items-center'><GoGoal className=' text-[20px] text-Agency-liniar'/>Make an Appointment</p>
                        <h2 className=' font-Dm-sans font-bold text-[46px] text-white'>Start New Project With Us</h2>
                        <div className=" my-3">
                          <input type="text" placeholder='Your Name' className=' font-Dm-sans font-normal text-[16px] text-gray-600 w-[50%] h-[50px] outline-none  pl-4 rounded-[30px]' />
                          <input type="Email" placeholder='Email Address' className=' font-Dm-sans font-normal text-[16px] text-gray-600 w-[50%] h-[50px] outline-none  pl-4 rounded-[30px]' />
                        </div>
                        <input type="text" placeholder='Business Topic' className=' font-Dm-sans font-normal text-[16px] text-gray-600 w-full h-[50px] outline-none  pl-4 rounded-[30px]' />
                        <input type="text" placeholder='Business Topic' className=' font-Dm-sans font-normal text-[16px] text-gray-600 w-full h-[150px] outline-none  pl-4 rounded-[30px] my-4' />
                       <button className=' font-Dm-sans font-medium text-[18px] text-white py-2 px-[15px] bg-Agency-liniar rounded-[10px]'>Send Message</button>
                      </div>
                    </div>
                </div>

                <div className=" w-[80%] mx-auto h-[150px bg-Agency-liniar rounded-[50px] absolute top-[-50px] left-[50%] transform translate-x-[-50%] border-[6px] border-white ">
                    <div className=" flex justify-around items-center">
                      <div className="w-[32%]">
                        <div className=" flex items-center gap-x-3">
                          <div className="  w-[60px] h-[60px] rounded-[50%] bg-white ">
                            <img src={groupImg1} className=' p-[10px]' alt="" />
                          </div>
                          <div className="">
                            <h4 className=' font-Dm-sans font-bold text-[45px] text-white'>1500</h4>
                            <p className=' font-Dm-sans font-normal text-[18px] text-white '>Project Complate</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[32%]">
                        <div className=" flex items-center gap-x-3">
                          <div className="  w-[60px] h-[60px] rounded-[50%] bg-white ">
                            <img src={groupImg1} className=' p-[10px]' alt="" />
                          </div>
                          <div className="">
                            <h4 className=' font-Dm-sans font-bold text-[45px] text-white'>1500</h4>
                            <p className=' font-Dm-sans font-normal text-[18px] text-white '>Project Complate</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[32%]">
                        <div className=" flex items-center gap-x-3">
                          <div className="  w-[60px] h-[60px] rounded-[50%] bg-white ">
                            <img src={groupImg1} className=' p-[10px]' alt="" />
                          </div>
                          <div className="">
                            <h4 className=' font-Dm-sans font-bold text-[45px] text-white'>1500</h4>
                            <p className=' font-Dm-sans font-normal text-[18px] text-white '>Project Complate</p>
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

export default Appointment