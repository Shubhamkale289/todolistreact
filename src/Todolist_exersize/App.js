import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoDisplay from "./TodoDisplay";

export default function App(){
    const [todoList, setTodoList] = useState([]);
    function addTodo(todo) {
        setTodoList((prevTodoList)=>{
            return [...prevTodoList, todo];
        })
    }
    function handleTodoDelete(index){
        console.log('deleted successfully attempted ', index);
        const newArr = todoList.filter((todo, i)=>{
            return i !== index
        })
        console.log(newArr);
        setTodoList(newArr)
    }
    return (
        <>
            <TodoForm addTodo={addTodo} />
            <TodoDisplay 
                todoList={todoList} 
                handleTodoDelete={handleTodoDelete}
            /> 
        </>
        //ghg

    )
}