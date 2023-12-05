import React, { useEffect, useState } from 'react'

export default function Child(){
  const [childState, setChidlState] = useState(false)

  // using useeffect as a mounted metthod
  useEffect(() => {
    console.log('i am easily able to mounted');
  }, [])

  
  useEffect(()=>{
    console.log('Child entering updated lifecycle')
  }, [childState])
  // the last array in the useEffect is dependancy array

  //usinguseEffect as an unmounted method
  useEffect(()=>{
    return () => {
      console.log('now i am capture the mounting')
    }
  }, [])
  return (
    <>
      <div>Child</div>
      <button onClick={()=>setChidlState((prev) => !prev)}>trigger update</button>
    </>
    
  )
}

