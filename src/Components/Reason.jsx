import React, { useEffect, useState } from 'react'
import { GoGoal } from "react-icons/go";
import { Line, Circle } from 'rc-progress';


    const skills = [
        { name: 'Software Development', percent: 80, },
        { name: 'Web Development', percent: 90,  },
        { name: 'UL / UX Design', percent: 85,  },
   
    ];
const Reason = () => {
    const [progress, setProgress] = useState(skills.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress.map((p, i) => {
                    const targetPercent = skills[i].percent > 90 ? 90 : skills[i].percent;
                    const newProgress = p + 1;
                    if (newProgress >= targetPercent) {
                        return targetPercent;
                    }
                    return newProgress;
                })
            );
        }, 20);

        return () => clearInterval(interval); 
    }, []);
  return (
    <div>
        <div className=" container">
            <div className="">
                <div className="w-[53%]">
                    <div className="">
                        <p className=' flex gap-x-2 items-center font-Dm-sans font-normal text-Agency-blu text-[18px]'><GoGoal/>Why Choose Ortencey</p>
                        <h2 className=' font-Dm-sans font-bold text-[46px] text-black'>Reason For Choosing Our Digital Agency</h2>
                        <p className=' font-Dm-sans font-medium text-[16px] text-Agency-Banner'>There are many variations of passages of Lorem Ipsum available, but the majori
                            suffered alteration in some form, by injected humour, or randomised word whiclook even sligh believable. If you are going to use.</p>
                     <div className="">
                     {skills.map((skill, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center gap-x-4 my-3">
                                   
                                    <h4 className='font-openG font-semibold text-[22px] text-Sky'>{skill.name}</h4>
                                </div>
                                <span className='font-openG font-semibold text-[22px] text-Sky'>{progress[index]}%</span>
                                <Line percent={progress[index]}  strokeWidth={2} strokeColor="#00BFFF" />
                                
                            </div>
                        ))}
                     </div>
                    </div>
                </div>
                <div className="w-[43%]"></div>
            </div>
        </div>
    </div>
  )
}

export default Reason