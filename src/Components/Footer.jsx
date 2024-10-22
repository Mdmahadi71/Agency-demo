import React from 'react'
import { FaFacebook ,FaTwitter ,FaLinkedin ,FaYoutube ,FaPhoneAlt  } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
  <>
    <div className=' bg-black py-[40px]'>
        <div className=" container">
            <div className=" flex justify-between items-center py-[30px]">
                <div className="w-[35%]">
                    <h3 className=' font-Dm-sans font-normal text-[16px] text-white'>For Digital Marketing Agency</h3>
                    <h2 className=' font-Nunito text-[25px] font-bold text-white'>Join Our Agency Community</h2>
                </div>
                <div className="w-[35%]">
                    <div className=" relative">
                        <input type="text" name="" id="" className=' w-full h-[70px]  rounded-[30px] bg-white  outline-none  ' placeholder=' Enter your email address' required />
                        <button className=' font-Dm-sans font-medium text-[18px] text-white p-[10px] bg-Agency-blu rounded-[30px]  absolute top-[50%] transform translate-y-[-50%] right-[10px]'>Subscribe Now</button>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between ">
                <div className="w-[24%]">
                    <div className="">
                          <h2 className=' font-Dm-sans font-bold text-[25px] text-white  border-b-[2px] border-Agency-liniar my-2'>About Company</h2>
                        <p className=' font-Dm-sans font-normal text-[16px] text-white'>There are many variations of passages of Lore
                            Ipsum availab but the majority have suffereds
                            alteration in some form, by injected humour a
                            randomised words which</p>
                            <div className=" flex gap-x-[20px] items-center py-[20px]">
                                <FaFacebook className=' p-[5px] bg-white text-[25px] rounded-[50%] text-Agency-blu'/>
                                <FaTwitter  className=' p-[5px] bg-white text-[25px] rounded-[50%] text-Agency-blu'/>
                                <FaLinkedin className=' p-[5px] bg-white text-[25px] rounded-[50%] text-Agency-blu' />
                                <FaYoutube  className=' p-[5px] bg-white text-[25px] rounded-[50%] text-Agency-blu'/>
                            </div>
                    </div>
                </div>
                <div className="w-[24%]">
                    <div className="">
                      <h2 className=' font-Dm-sans font-bold text-[25px] text-white  border-b-[2px] border-Agency-liniar my-2'>Featured Services</h2>
                      <ul> 
                        <li className=' font-Dm-sans font-normal text-[16px] text-[#D9D9D9] list-disc hover:text-Agency-blu duration-300'>Social Media Marketing</li>
                        <li className=' font-Dm-sans font-normal text-[16px] text-[#D9D9D9] list-disc hover:text-Agency-blu duration-300'>Pay Per Click Management</li>
                        <li className=' font-Dm-sans font-normal text-[16px] text-[#D9D9D9] list-disc hover:text-Agency-blu duration-300'>Search Engine Optimization</li>
                        <li className=' font-Dm-sans font-normal text-[16px] text-[#D9D9D9] list-disc hover:text-Agency-blu duration-300'>Free SEO Analysis</li>
                        <li className=' font-Dm-sans font-normal text-[16px] text-[#D9D9D9] list-disc hover:text-Agency-blu duration-300'>Case Studies</li>
                      </ul>
                    </div>
                </div>

                  <div className="w-[24%]">
                      <div className="">
                          <h2 className=' font-Dm-sans font-bold text-[25px] text-white  border-b-[2px] border-Agency-liniar my-2'>Recent Post</h2>
                          <div className=" flex items-center gap-x-2">
                            <div className=" w-[70px] h-[70px] bg-slate-400 rounded-[5px]"></div>
                            <div className="">
                                <p className=' font-Dm-sans font-normal text-[16px] text-white'>Thoughtful man using laptop pondering </p>
                                <p className=' text-white flex items-center gap-x-2 font-Dm-sans font-normal text-[16px]'><BsCalendar2DateFill className=' text-Agency-blu'/> 09 Dec 2022</p>
                            </div>
                          </div>
                          <div className=" flex items-center gap-x-2 py-3">
                            <div className=" w-[70px] h-[70px] bg-slate-400 rounded-[5px]"></div>
                            <div className="">
                                <p className=' font-Dm-sans font-normal text-[16px] text-white'>Thoughtful man using laptop pondering </p>
                                <p className=' text-white flex items-center gap-x-2 font-Dm-sans font-normal text-[16px]'><BsCalendar2DateFill className=' text-Agency-blu'/> 09 Dec 2022</p>
                            </div>
                          </div>
                      </div>
                  </div>
                <div className="w-[24%]">
                    <div className="">
                       <h2 className=' font-Dm-sans font-bold text-[25px] text-white  border-b-[2px] border-Agency-liniar my-2'>Contact Us</h2>
                       <p className=' font-Dm-sans font-normal text-[16px] text-white flex gap-x-4 items-center'><FaPhoneAlt  className=' text-Agency-blu'/>  +(323) 750-1234</p>
                       <p className=' font-Dm-sans font-normal text-[16px] text-white flex gap-x-4 items-center'><MdEmail className=' text-Agency-blu'/> infoyourortencey@gmail.com</p>
                       <p className=' font-Dm-sans font-normal text-[16px] text-white flex gap-x-4 items-center'><FaLocationDot className=' text-Agency-blu'/> 374 FA Tower, William S Blvd, Melbourne
                       2721, IL, USA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <div className=" bg-Agency-blu">
    <div className=" container">
        <div className=" flex justify-between items-center py-[30px]">
            <p className=' font-Dm-sans font-normal text-[16px] text-white'>2022 © All rights reserved by devsnest-llc</p>
            <p className='font-Dm-sans font-normal text-[16px] text-white'>Privacy Policy       |       Terms & Conditions</p>
         
        </div>
    </div>
  </div>
  </>
  )
}

export default Footer