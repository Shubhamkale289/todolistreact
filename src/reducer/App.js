import React, { useReducer, useState } from 'react'

export default function App() {
    // const [count, dispatch] = useState(reducer, initialState);
    function reducer(state, action){
      // console.log('reducer')
        switch(action){
          case 'increament' : 
            return {count: state.count + 1}
          case 'decreament':
            return {count: state.count - 1 }
          case 'reset':
            return {count: 0}
        }
    }
    const [counter, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
      {counter.count}
      <button onClick={()=> dispatch("decreament")}>decreament</button>
      <button onClick={()=> dispatch("reset")}>reset</button>
      <button onClick={()=> dispatch("increament")}>increament</button>
    </>
  )
}
