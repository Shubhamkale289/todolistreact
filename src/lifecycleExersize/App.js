import React, { useEffect, useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default function App() {
    const [apiData1, setApiData1] = useState({});
    const [apiData2, setApiData2] = useState({});

    async function random(apiRequest){
        const response = await fetch(apiRequest);
        const data = response.json();
        // console.log(data);
        return data;
    }
    // async function random2(){
    //     const response2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    //     const data2 = response2.json();
    //     console.log(data2);
    // }
    useEffect(() => {
      const todo1 = random('https://jsonplaceholder.typicode.com/todos/1');
      setApiData1(todo1)

      const todo2 = random('https://jsonplaceholder.typicode.com/todos/2');
      setApiData2(todo2)
    }, [])
    // useEffect(() => {
    //     random();
    //   }, [])
    

    const [isChild, setIsChild] = useState(true);
  return (
    <div>
      {isChild ? <Child1 data1 = {apiData1} /> : <Child2 data = {apiData2} />}
      <button onClick={setIsChild((prev) => !prev)}>Change Componant</button>
    </div>
  )
}
