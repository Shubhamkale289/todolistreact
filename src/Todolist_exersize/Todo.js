import React from "react";

export default function Todo({todo, handleTodoDelete,index}){
    
    return (
        <>
        <div style={{display:'flex', columnGap:'10px'}}>
            <div>{todo}</div>
            <button>Complete Icon</button>
            <button 
                onClick={()=> handleTodoDelete(index)} 
            >Delete Icon</button>
        </div>
        </>
    )
}