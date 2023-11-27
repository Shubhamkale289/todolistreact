import React, { useState } from "react";


export default function TodoForm({addTodo}) {
    const [todoValue, setTodoValue] = useState(""); // to handle input box -> making it a controlled cmponant
    function handleTodoInputChange(e) {
        setTodoValue(e.target.value)
    }
    function handleTodoFormSubmit(e) {
        e.preventDefault();
        console.log(todoValue);
        // below code for the add the input in the array list and make the input box empty
        addTodo(todoValue)
        setTodoValue("");
    }
    return (
        <>
            <form>
                <input 
                    type="text" 
                    name="todo" 
                    placeholder="Enter Todo" 
                    value={todoValue} 
                    onChange={handleTodoInputChange}
                ></input>
                <button onClick={handleTodoFormSubmit}>Add Todo</button>
            </form>
        </>
    )
}