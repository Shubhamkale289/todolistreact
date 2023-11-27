import React, {useState} from "react";
import TodoForm from "./TodoForm";


export default function App(){
    const [todoList, setTodoList] = useState([]);
    function addTodo(todo) {
        setTodoList((prevTodoList)=>{
            return [...prevTodoList, todo];
        })
    }
    
    return (
        <>
            <TodoForm addTodo={addTodo} />
        </>

    )
}