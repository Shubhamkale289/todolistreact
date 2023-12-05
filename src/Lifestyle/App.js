import React, {useState} from 'react'
import Child from './Child'

const App = () => {
  const [trigger, setTrigger] = useState(false);
  // function handlerOnclick(){
  //   return setTrigger((prev)=>{
  //     return !prev;
  //   })
  // }
  return (
    <>
      <Child />
      <button onclick={()=>setTrigger((prev)=> !prev)}>Trigger LifeCycles</button>
    </>
  )
}

export default App
