import React, {useState} from "react";
import Todo from "./Todo";

export default function TodoDisplay({todoList, handleTodoDelete}) {

    return (
        <>
            {todoList.map((todo, id)=>{
                return <Todo 
                    todo={todo} 
                    key={todo.id}
                    id={todo.id}
                    handleTodoDelete={handleTodoDelete} />
            })}
        </>
    )
}