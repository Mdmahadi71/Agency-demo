import React from 'react'

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
        </div>
    </div>
  )
}

export default Footer