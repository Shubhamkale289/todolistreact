import React, {useState} from "react";
import Todo from "./Todo";

export default function TodoDisplay({todoList, handleTodoDelete}) {

    return (
        <>
            {todoList.map((todo, id)=>{
                return <Todo 
                    todo={todo} 
                    isCompleted={todo.isCompleted}
                    id={todo.id}
                    id={todo.id}
                    handleTodoDelete={handleTodoDelete} />
            })}
        </>
    )
}