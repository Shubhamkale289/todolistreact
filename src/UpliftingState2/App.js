import React, {useState} from "react";
import Child from "./Child";

export default function App(){
    const [count, setCount] = useState(100);
    const [childChild, setChildChild] = useState(0);

    function handlerClick(numb){
        setCount((prev)=>{
            return prev + numb;

        })
    }

    function handlerChildChild(childData){
        setChildChild(childData)
    }

    return (
        <>
            <Child 
                count = {count}
                handlerClick = {handlerClick}
                handlerChildChild = {handlerChildChild}
            />

            <div>Child State Display - Hack - {childChild} </div>
        </>
    )
}