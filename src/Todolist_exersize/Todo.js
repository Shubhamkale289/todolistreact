import React from "react";

export default function Todo({todo,id, handleTodoDelete, isCompleted}){
    
    return (
        <>
        <div style={{display:'flex', columnGap:'10px'}}>
            <div style={isCompleted ? {textDecoration: 'line-through'} : {}}>{todo}</div>
            <button>Complete Icon</button>
            <button 
                onClick={()=> handleTodoDelete(id)} 
            >Delete Icon</button>
        </div>
        </>
    )
}