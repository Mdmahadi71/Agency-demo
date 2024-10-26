import React, { useContext } from 'react'
import { DataApi } from './ContextApi';


const ShopPage = () => {
    let mainData = useContext(DataApi)
    console.log(mainData);
    
  return (
    <div className=' py-[100px]'>
      <div className=" container">
        <div className="">
            {mainData.map((item)=>(
                <div className=" flex justify-between ">
                    <h3>{item.todo}</h3>
                    <h3>{item.completed}</h3>
                    <h3>{item.userId}</h3>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
