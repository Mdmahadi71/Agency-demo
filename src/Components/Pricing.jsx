import React from 'react'
import { GoGoal } from "react-icons/go";
import vectorImg1 from '../assets/Vector1.png'
import { IoIosCheckbox } from "react-icons/io";
import vectorImg3 from '../assets/Vector.png'
import vectorImg4 from '../assets/vertor2.png'

const Pricing = () => {
  return (
    <div className=' my-[30px]'>
        <div className=" container">
            <div className=" text-center">
                <p className=' font-Dm-sans font-normal text-[20px] text-Agency-blu flex gap-x-2 justify-center items-center'> <GoGoal className=' text-[20px] text-Agency-liniar'/> Our Pricing</p>
                <h3 className=' font-Dm-sans font-bold text-[46px] text-black'> Our Best Pricing Plan</h3>
            </div>
            <div className=" flex justify-between items-center">
                <div className=" w-[31%]">
                    <div className=" w-full h-[500px] bg-Agency-deve rounded-[20px] relative">
                        <div className="">
                            <h3 className=' font-Nunito font-medium text-[20px] text-black ml-4 mt-2'>Basic Plan</h3>
                            <div className=" flex gap-x-3 items-center ml-4 mt-2">
                                <h2 className=' font-Dm-sans font-bold text-[46px] text-Agency-blu'>30$</h2>
                                <p className=' font-Dm-sans font-normal text-[16px] text-Agency-Banner pb-0 '>Per Month</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-[100px] bg-Agency-blu absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[60px] border-l-[5px] border-b-[5px] border-white">
                            <img src={vectorImg1} className=' w-[30px] mx-auto my-[25%]' alt="" />
                        </div>
                        <div className=" border-[1px] border-Agency-Banner "></div>

                        <div className=" my-5">
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Free Consultations</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Business Planning</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Investment Process</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Market Research</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Online Support</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Unlimited Updates</p>
                        </div>
                        <button className=' py-2 px-[60px] border-[1px] border-Agency-blu font-Dm-sans font-medium text-[20px] text-black hover:bg-Agency-menu hover:text-white rounded-[20px]  text-center flex justify-center items-center mx-auto duration-300 '>Choose Plan</button>
                    </div>
                </div>
                <div className=" w-[31%]">
                    <div className=" w-full h-[500px] bg-Agency-deve rounded-[20px] relative">
                        <div className="">
                            <h3 className=' font-Nunito font-medium text-[20px] text-black ml-4 mt-2'>Gold Plan</h3>
                            <div className=" flex gap-x-3 items-center ml-4 mt-2">
                                <h2 className=' font-Dm-sans font-bold text-[46px] text-Agency-blu'>60$</h2>
                                <p className=' font-Dm-sans font-normal text-[16px] text-Agency-Banner pb-0 '>Per Month</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-[100px] bg-Agency-liniar absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[60px] border-l-[5px] border-b-[5px] border-white">
                            <img src={vectorImg4} className=' w-[30px] mx-auto my-[25%]' alt="" />
                        </div>
                        <div className=" border-[1px] border-Agency-Banner "></div>

                        <div className=" my-5">
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Free Consultations</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Business Planning</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Investment Process</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Market Research</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Online Support</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Unlimited Updates</p>
                        </div>
                        <button className=' py-2 px-[60px] border-[1px] border-Agency-blu font-Dm-sans font-medium text-[20px] text-black hover:bg-Agency-menu hover:text-white rounded-[20px]  text-center flex justify-center items-center mx-auto duration-300 '>Choose Plan</button>
                    </div>
                </div>
                <div className=" w-[31%]">
                    <div className=" w-full h-[500px] bg-Agency-deve rounded-[20px] relative">
                        <div className="">
                            <h3 className=' font-Nunito font-medium text-[20px] text-black ml-4 mt-2'>Silver Plan</h3>
                            <div className=" flex gap-x-3 items-center ml-4 mt-2">
                                <h2 className=' font-Dm-sans font-bold text-[46px] text-Agency-blu'>99$</h2>
                                <p className=' font-Dm-sans font-normal text-[16px] text-Agency-Banner pb-0 '>Per Month</p>
                            </div>
                        </div>
                        <div className="w-[150px] h-[100px] bg-Agency-blu absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[60px] border-l-[5px] border-b-[5px] border-white">
                            <img src={vectorImg3} className=' w-[30px] mx-auto my-[25%]' alt="" />
                        </div>
                        <div className=" border-[1px] border-Agency-Banner "></div>

                        <div className=" my-5">
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Free Consultations</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Business Planning</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Investment Process</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Market Research</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Online Support</p>
                            <p className=' font-Dm-sans font-normal text-[18px] text-black  flex gap-x-2 items-center justify-center my-5'><span><IoIosCheckbox className=' text-[18px] text-Agency-liniar'/></span> Unlimited Updates</p>
                        </div>
                        <button className=' py-2 px-[60px] border-[1px] border-Agency-blu font-Dm-sans font-medium text-[20px] text-black hover:bg-Agency-menu hover:text-white rounded-[20px]  text-center flex justify-center items-center mx-auto duration-300 '>Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing