import React from 'react'
import bannerImg from '../assets/bannerImg.jpg'

const Banner = () => {
  return (
    <div className=' py-[121px] bg-Agency-Banner'>
      <div className=" container">
        <div className=" flex justify-between items-center">
            <div className="w-[58%]">
                <div className="">
                    <p className=' font-Dm-sans font-normal text-[25px] text-Agency-liniar'>Your Trusted Ortencey Agency</p>
                    <h2 className=' font-Dm-sans font-bold text-[60px] text-white'>Our Digital Agency With Excellence Services</h2>
                    <p className=' font-Dm-sans font-medium text-[20px] text-white'>The 3 golden rules professional Digital Marketing Agency don’t
                    want you to know about.</p>
                    <button className=' px-[20px] py-[10px] rounded-[10px] bg-Agency-liniar text-[16px] font-Dm-sans font-normal text-white my-[20px]'>Discover More</button>
                </div>
            </div>
            <div className="w-[38%] flex justify-center">
                <div className=" w-[300px] h-[300px] rounded-[50%]">
                    <img src={bannerImg} className=' w-full h-full rounded-[50%]' alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
