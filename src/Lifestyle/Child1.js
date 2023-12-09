import React, { useEffect, useState } from 'react'

export default function Child1(){
  const [childState, setChidlState] = useState(false)
  const [childState2, setChidlState2] = useState(false)

  // using useeffect as a mounted metthod
  // useEffect(() => {
  //   console.log('i am easily able to mounted');
  // }, [])


  // useEffect(()=>{
  //   console.log('Child entering updated lifecycle')
  // }, [childState])
  // // the last array in the useEffect is dependancy array

  // useEffect(()=>{
  //   console.log('Child entering updated lifecycle2')
  // }, [childState2])

  // //usinguseEffect as an unmounted method
  // useEffect(()=>{
  //   return () => {
  //     console.log('now i am capture the mounting')
  //   }
  // }, [])

  // mounted
  useEffect(()=>{
    console.log('componant name - mounted')
  },[])

  useEffect(() => {
    return () => {
      console.log('componant name - unmounted')
    }
  }, [])
  
  return (
    <>
      <div>Child</div>
      <button onClick={()=>setChidlState((prev) => !prev)}>trigger update</button>
      <div>
        <button onClick={()=>setChidlState2((prev)=> !prev)}>Trigger Another state update</button>
      </div>
    </>
    
  )
}

