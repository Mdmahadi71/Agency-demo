import React from 'react'
import marketingImg from '../assets/marketingImg.png'
import { GoGoal } from "react-icons/go";
import { MdCheckBox } from "react-icons/md";

const MarketingCon = () => {
    return (
        <div>
            <div>
                <div className=' py-[100px]'>
                    <div className=" container">
                        <div className=" flex justify-between items-center ">
                            <div className="w-[38%]">
                                <div className=" ">
                                    <img src={marketingImg} alt="" />
                                </div>
                            </div>

                            <div className="w-[58%]">
                                <div className="">
                                    <p className=' font-Dm-sans font-normal text-[20px] text-Agency-blu flex gap-x-2 items-center'><GoGoal className=' text-Agency-liniar' /> About Our Company</p>
                                    <h2 className=' font-Dm-sans font-bold text-[46px] text-black'>Best Digital Marketing Agency
                                        For People</h2>
                                    <p className=' font-Dm-sans font-normal text-[20px] text-Agency-Banner'>There are many variations of passages of Lorem Ipsum available,
                                        but the majority have assuffered alteration in some form, by injected humour, or randomised words which
                                        don't alook even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
                                    <div className="w-[70%] flex justify-between items-center my-[20px]">
                                        <div className="">
                                            <div className=" flex gap-x-2 items-center">
                                                <MdCheckBox className=' text-[green]'/>
                                                <p className=' font-Dm-sans font-normal text-[16px] text-black'>Digital Strategy</p>
                                            </div>
                                            <div className=" flex gap-x-2 items-center">
                                                <MdCheckBox className=' text-[green]'/>
                                                <p className=' font-Dm-sans font-normal text-[16px] text-black'>SEO Optimization</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className=" flex gap-x-2 items-center">
                                                <MdCheckBox className=' text-[green]'/>
                                                <p className=' font-Dm-sans font-normal text-[16px] text-black'>Marketing</p>
                                            </div>
                                            <div className=" flex gap-x-2 items-center">
                                                <MdCheckBox className=' text-[green]'/>
                                                <p className=' font-Dm-sans font-normal text-[16px] text-black'>First Working Process</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className=' px-[20px] py-3 rounded-[17px] bg-Agency-liniar font-Dm-sans font-normal text-[16px] text-white'>Read more</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingCon