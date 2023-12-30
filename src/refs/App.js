import React, { useRef } from 'react'

export default function App() {
  const ref1 = useRef(null)
  const ref2 = useRef(10);
  console.log(ref1)
  console.log(ref2)

  function submitForm(e){
    e.preventDefault();
    console.log(ref1)
    console.log(ref2)
  }
  return (
    <div>
      <form action='' onSubmit={submitForm}>
        <div>
          <label htmlFor=''>Enter Your Name</label>
          <input type='text' ref={ref1}/>
        </div>
        <br />
        <div>
          <label htmlFor='' >Enter Your Age</label>
          <input type='number' ref={ref2}/>
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
