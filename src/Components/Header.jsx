import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF ,FaLinkedin , FaTwitter ,FaYoutube} from "react-icons/fa";
import agenIcon from '../assets/agencyHedarIcon.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch ,IoBag} from "react-icons/io5";



const Header = () => {
  return (
    <>
      <div className=' bg-Agency-blu py-[15px]'> 
          <div className=" container">
              <div className=" lg:flex justify-between items-center">
                <div className="lg:w-[75%]">
                    <div className=" lg:flex justify-between mx-auto lg:mx-0">
                        <div className="lg:w-[44%] lg:border-r-[2px] border-white">
                        <h3 className=' font-Dm-sans font-normal text-[14px] text-white'>Welcome to Ortencey Digital Market Agency</h3>
                        </div>
                        <div className=" lg:w-[23%] mx-auto lg:mx-0 justify-center flex space-x-2 items-center lg:my-0 my-[15px]  lg:border-r-[2px] border-white">
                            <FaPhoneAlt className=' text-Agency-liniar'/>
                            <p className=' font-Dm-sans font-normal text-[14px] text-white '>+88 ( 5548 ) 6548</p>
                        </div>
                        <div className=" lg:w-[24%] mx-auto  justify-center flex space-x-1 items-center lg:my-0 my-[15px] ">
                            <MdEmail className=' text-Agency-liniar'/>
                            <p className=' font-Dm-sans font-normal text-[14px] text-white '>infoyour@gmail.com</p>
                        </div>

                    </div>
                </div>
                <div className="lg:w-[24%]">
                    <div className=" flex justify-between items-center">
                          <div className="w-[38%] border-r-[2px] border-white">
                              <select name="" id="" className=' outline-none bg-Agency-blu font-Dm-sans font-medium text-[15px] text-white'>
                                  <option value="English" className=' font-Dm-sans font-medium text-[15px] text-white outline-none bg-Agency-blu'>English</option>
                                  <option value="Bangla" className=' outline-none bg-Agency-blu'>Bangla</option>
                              </select>
                          </div>
                          <div className="w-[13%] mx-auto border-r-[2px] border-white">
                            <FaFacebookF className=' text-[20px] text-white  hover:text-Agency-liniar duration-300'/>
                          </div>
                          <div className="w-[13%] mx-auto border-r-[2px] border-white">
                            <FaLinkedin className=' text-[20px] text-white  hover:text-Agency-liniar duration-300'/>
                          </div>
                          <div className="w-[13%] mx-auto border-r-[2px] border-white">
                            <FaTwitter className=' text-[20px] text-white  hover:text-Agency-liniar duration-300'/>
                          </div>
                          <div className="w-[13%] mx-auto border-r-[2px] border-white border-h-full">
                          <FaYoutube className=' text-[20px] text-white  hover:text-Agency-liniar duration-300'/>
                          </div>
                    </div>
                </div>
              </div>
          </div>
      </div>

      <div className=" py-4">
        <div className=" container">
            <div className=" flex justify-between items-center">
                <div className="w-[20%]">
                    <div className=" flex space-x-2 items-center">
                        <div className="w-[40%]">
                            <img src={agenIcon} alt="" />
                        </div>
                        <div className="w-[55%]">
                            <p className=' font-Dm-sans font-medium text-[22px] text-black'>ortencey</p>
                            <p className=' font-Dm-sans font-normal text-[12px] text-Agency-blu'>Digital Marketing</p>
                        </div>
                    </div>
                </div>
                <div className="w-[55%]">
                    <ul className=' flex justify-between items-center'> 
                        <li className=' flex items-center gap-x-1 font-Nunito font-normal text-[16px] text-black hover:text-Agency-menu duration-300'>Home <IoIosArrowDown/> </li>
                        <li className=' flex items-center gap-x-1 font-Nunito font-normal text-[16px] text-black hover:text-Agency-menu duration-300'>About <IoIosArrowDown/> </li>
                        <li className=' flex items-center gap-x-1 font-Nunito font-normal text-[16px] text-black hover:text-Agency-menu duration-300'>Services <IoIosArrowDown/> </li>
                        <li className=' flex items-center gap-x-1 font-Nunito font-normal text-[16px] text-black hover:text-Agency-menu duration-300'>Team <IoIosArrowDown/> </li>
                        <li className=' flex items-center gap-x-1 font-Nunito font-normal text-[16px] text-black hover:text-Agency-menu duration-300'>Pages <IoIosArrowDown/> </li>
                        <li className=' flex items-center gap-x-1 font-Nunito font-normal text-[16px] text-black hover:text-Agency-menu duration-300'>News <IoIosArrowDown/> </li>
                        <li className=' flex items-center gap-x-1 font-Nunito font-normal text-[16px] text-black hover:text-Agency-menu duration-300'>Contact <IoIosArrowDown/> </li>
                        
                      
                    </ul>
                </div>
                <div className="w-[25%]">
                    <div className=" flex justify-around items-center">
                        <div className="w-[20%] border-[1px] border-Agency-blu px-3 py-3 rounded-[50%]">
                            <IoSearch/>
                        </div>
                        <div className="w-[20%] border-[1px] border-Agency-blu px-3 py-3 rounded-[50%]">
                            <IoBag/>
                        </div>
                        <div className="w-[50%] ">
                            <p className=' border-[1px] border-Agency-blu py-[10px] px-[15px] rounded-[20px] bg-Agency-blu font-Nunito font-normal text-white text-[12px] text-center'>Free Quote</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
  )
}

export default Header
