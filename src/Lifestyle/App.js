import React, {useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2';

export default function App() {
  // const [isChild, setIsChild] = useState(true);
  // function handlerOnclick(){
  //   returnsetTrigger((prev)=>{
  //     return !prev;
  //   })
  // }

  const [apiData, setApiData] = useState({})
  async function random(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
    setApiData(data);
  }

  useEffect(() => {
    random();
  }, [])
  
  const [isChild1, setIsChild] = useState(true);
  return (
    <>
      {isChild ? <Child1 data = {apiData} /> : <Child2 data={apiData}/>}
      {/* {isChild && <Child2 />} */}
      <button onClick={()=>{setIsChild((prev)=> !prev)}}>Trigger LifeCycles</button>
    </>
  )
}

