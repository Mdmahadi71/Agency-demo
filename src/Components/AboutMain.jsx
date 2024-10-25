import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AboutMain = () => {
    let [data , setdata] = useState([])

    let getData = ()=>{
      axios.get('https://dummyjson.com/quotes').then((response) =>{
        setdata(response.data.quotes);
        
      })



     
    }
    useEffect(()=>{
      getData()
    },[])
    console.log(data);
    
  return (
    <div>
      <div className=" container">
        <div className="">
            <div className="w-[23%]">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, beatae quos laborum perspiciatis sapiente qui, ratione distinctio ipsam, id totam eveniet neque? Nobis dicta praesentium vero placeat ab vel impedit!
            </div>
            <div className="">
              {data.map((item) => (
                <div className=" flex justify-between">
                  
                  <h5>{item.quote}</h5>
                 <h3>{item.author}</h3>
                 
                </div>
                
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMain
