import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Menkids } from '../constants/Constants';
const DataContext = createContext();
function Context({children}) {
    const [data, setData] = useState();
    const [jsonData, setJsonData] = useState()
    const [cart, setCart] = useState([])
    const fetchData = () =>{
        axios.get('https://firstcrymockserver2.onrender.com/MenKids')
        .then(data =>{
            console.log(data.data);
            setData( data.data);
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
   
  return (
    <DataContext.Provider value = {{data, cart, setCart}}>
    {children}
    </DataContext.Provider>
  )
}

export default Context;

export const ContextState =() =>{
    return useContext(DataContext);
}
