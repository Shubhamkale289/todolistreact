import React, {useState} from "react";


export default function Child({count, handlerClick, handlerChildChild}) {
    const [cCount, setCount] = useState(0);
    function internalChildHandler(data){
        setCount((prev) =>{
            handlerChildChild(prev+data);
            return prev+data;
        })
    }
    return (
        <>
            <div>Child {count} </div>
            <button onClick={()=> handlerClick(20)} >update count</button>
            <button onClick={()=> internalChildHandler(20)}>update child child</button>
        </>
    )
}