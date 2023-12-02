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
    function handleTodoDelete(id){
        console.log('deleted successfully attempted ', id);

        setTodoList((prev)=>{
            const newArr = prev.filter((todo)=>{
                return todo.id !== id
            })
            return newArr;
        })
        // console.log(newArr);
        // setTodoList(newArr)
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