import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let DataApi = createContext()

const ContextApi = ({children}) => {
    let [apiData , setapiData] = useState([])

    let getData = ()=>{
        axios.get('https://dummyjson.com/todos').then((response)=>{
            setapiData(response.data.todos);
            
        })
    }
    useEffect(()=>{
        getData()
    },[])
    
    
  return (
    <DataApi.Provider value={apiData}>
      {children}
    </DataApi.Provider>
  )
}

export  {ContextApi,DataApi}
