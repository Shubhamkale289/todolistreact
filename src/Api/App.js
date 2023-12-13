// import React, { useState, useEffect } from 'react'

// export default function App() {
//     const [showTitle, setShowTitle] = useState([]);
//     useEffect(()=>{
//       async function displayTask(){
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = response.json();
//         console.log(data);
//       }
//       displayTask();
//     },[])
      
//   return (
//     <div>
//       {showTitle.map((todo)=>{
//         <div key={todo.ids}>{todo.title}</div>
//       })}
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';

const TodoTitleDisplay = () => {
  const [todos, setTodos] = useState([]);
 
  useEffect(() => {
    // Fetch data from the API for multiple todos
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching data:', error));
      setTodos(todos)
  }, []);

  return (
    <div>
      <h1>Todo Titles</h1>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>Title:{todo.title}</div> 
          </div>
        ))}
    </div>
  );
};

export default TodoTitleDisplay;

