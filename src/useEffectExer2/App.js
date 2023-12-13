import React from 'react'
import { useState, useEffect } from 'react'

let timer;

export default function App() {
    const [count, setCount] = useState(0);
    // useEffect(()=>{
    //   timer = setInterval(()=>{
    //     setCount((prev)=>{
    //       if(prev >= 9){
    //         clearInterval(timer);
    //       }
    //       return prev+1;
    //     });
    //     },1000)
    // },[])

    useEffect(()=>{
      timer = setInterval(()=>{
        setCount((prev)=>{
          return prev+1;
        });
        },1000)
    },[])
    useEffect(()=>{
      if(count >= 10){
        console.log("print");
        clearInterval(timer)
      }
    })
    
  return (
    <div>
        <div >{count}</div>
        <button >Increase Counter</button>
        <button >Decrease Counter</button>
    </div>
  )
}
