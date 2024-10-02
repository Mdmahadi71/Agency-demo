import React from 'react'
import appoinImg from '../assets/reasonImg.jpg'
import vdoIcon from '../assets/vdoIcon.png'

const Appointment = () => {
  return (
    <div className=' my-[40px]'>
        <div className=" container">
            <div className=" bg-Agency-blu w-full h-[500px] rounded-[20px]">
                <div className="">
                    <div className="w-[48%]">
                        <div className="  pt-[100px]  relative">
                          <img src={appoinImg} className=' w-[400px] h-[300px] mx-auto rounded-[20px]' alt="" />
                          <div className=" absolute top-[50%] left-[40%] transform ">
                                <img src={vdoIcon} alt="" />
                          </div>
                        </div>
                    </div>
                    <div className="w-[48%] "></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appointment