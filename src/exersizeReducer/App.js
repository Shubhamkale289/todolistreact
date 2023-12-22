import React from 'react'
import { useReducer } from 'react'

export default function App() {

  function reducer(state, action) {
    switch (action.type) {
      case 'handleNameChange':
        return { ...state, name: action.payload.data }
      case 'handleAgeChange':
        return { ...state, age: action.payload.data }
      case 'handleGenderChange':
        return { ...state, gender: action.payload.data }
      case 'submitForm':
        return { ...state, isFormSubmitted: true }
    } 
  }

  const [formState, dispatch] = useReducer(reducer, { name: '', age: '', gender: 'male', isFormSubmitted: false });
  return (
    <div>
      {formState.isFormSubmitted && <div>{JSON.stringify(formState)}</div>}
      <input type='text' onChange={(e)=> dispatch({type: 'handleNameChange', payload:{data: e.target.value}}) } placeholder='name' value={formState.name} />
      <input type='text' onChange={(e)=> dispatch({type: 'handleAgeChange', payload:{data: e.target.value}}) } placeholder='age' value={formState.age} />

      <input type='text' onChange={(e)=> dispatch({type: 'handleGenderChange', payload:{data: e.target.value}}) } placeholder='gender' value={formState.gender} />
      <button onClick={()=> dispatch({type: 'submitForm'})}>submit</button>
    </div>
  )
}
