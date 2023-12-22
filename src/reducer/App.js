import React, { useReducer, useState } from 'react'

export default function App() {
    // const [count, dispatch] = useState(reducer, initialState);
    function reducer(state, action){
      // console.log('reducer')
        switch(action){
          case 'increament' : 
            return {...state, count: state.count + 1}
          case 'decreament':
            return {...state, count: state.count - 1 }
          case 'reset':
            return {...state, count: 0}
        }
    }
    const [counter, dispatch] = useReducer(reducer, {count: 0, count2: 100});
  return (
    <>
      
      <div>
        {counter.count}
      </div>
      <div>
        {counter.count2}
      </div>
      
      <button onClick={()=> dispatch("decreament")}>decreament</button>
      <button onClick={()=> dispatch("reset")}>reset</button>
      <button onClick={()=> dispatch("increament")}>increament</button>
    </>
  )
}
