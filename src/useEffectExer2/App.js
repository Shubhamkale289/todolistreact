import React from 'react'
import { useState, useEffect } from 'react'

export default function App() {
    const [count, setCount] = useState(0);
  
    useEffect(()=>{
        setInterval(()=>{
            // console.time();
            setCount((prev)=>prev+1)
            // console.timeEnd();
        },1000)
    },[])

    // function increamentBtn(){
    //     setCount((prev)=>{ 
    //         prev = prev+1;
    //     })
    // }
    // function decreamentBtn(){
    //     setCount((prev)=>{
    //         prev = prev+1;
    //     })
    // }
  return (
    <div>
        <div >{count}</div>
        <button >Increase Counter</button>
        <button >Decrease Counter</button>
    </div>
  )
}
