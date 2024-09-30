import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
      <div className=' bg-Agency-blu py-[15px]'> 
          <div className=" container">
              <div className="">
                <div className="w-[75%]">
                    <div className=" flex justify-between">
                        <div className="w-[44%] border-r-[2px] border-white">
                        <h3 className=' font-Dm-sans font-normal text-[14px] text-white'>Welcome to Ortencey Digital Market Agency</h3>
                        </div>
                        <div className=" w-[23%] flex space-x-2 items-center  border-r-[2px] border-white">
                            <FaPhoneAlt className=' text-Agency-liniar'/>
                            <p className=' font-Dm-sans font-normal text-[14px] text-white '>+88 ( 5548 ) 6548</p>
                        </div>
                        <div className=" w-[24%]  flex space-x-1 items-center ">
                            <MdEmail className=' text-Agency-liniar'/>
                            <p className=' font-Dm-sans font-normal text-[14px] text-white '>infoyour@gmail.com</p>
                        </div>

                    </div>
                </div>
                <div className="w-[24%]">
                    <div className="">
                          <div className="w-[8%] border-r-[2px] border-white">
                              <select name="" id="" className=' outline-none bg-Agency-blu'>
                                  <option value="English" className=' outline-none bg-Agency-blu'>Volvo</option>
                                  <option value="Bangla" className=' outline-none bg-Agency-blu'>Saab</option>
                              </select>
                          </div>
                          <div className=""></div>
                    </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Header
