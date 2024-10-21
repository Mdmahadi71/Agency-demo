import React from 'react'
import { FaFacebook ,FaTwitter ,FaLinkedin ,FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-black'>
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
            <div className="">
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
            </div>
        </div>
    </div>
  )
}

export default Footer