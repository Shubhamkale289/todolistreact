import React, {useEffect, useState} from 'react'

export default function Child2({data}) {
    // const
    // const [childState, setChidlState] = useState(false);

    console.log(data);
    // // mount and
    // useEffect(()=>{
    //     console.log('componant name - mounted')
    //   },[])
    // // unmount separately
    //   useEffect(() => {
    //     return () => {
    //       console.log('componant name - unmounted')
    //     }
    //   }, [])

    // mounting and unmounting together --> How ? 
    useEffect(()=>{
      console.log('Child2 got mounted')
      return ()=>{
        console.log('child2 got unmounted')
      }
    },[])
      
      return (
        <>
          <div>Child</div>
          <button onClick={()=>setChidlState((prev) => !prev)}>trigger update</button>
          {/* <div>
            <button onClick={()=>setChidlState2((prev)=> !prev)}>Trigger Another state update</button>
          </div> */}
        </>
    )
}
