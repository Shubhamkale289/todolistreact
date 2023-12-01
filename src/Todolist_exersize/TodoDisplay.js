import React, {useState} from "react";
import Todo from "./Todo";

export default function TodoDisplay({todoList, handleTodoDelete}) {

    return (
        <>
            {todoList.map((todo, index)=>{
                return <Todo 
                    todo={todo} 
                    index={index}
                    handleTodoDelete={handleTodoDelete} />
            })}
        </>
    )
}