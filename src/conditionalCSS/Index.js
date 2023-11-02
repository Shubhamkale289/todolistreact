import React, {useState} from 'react';
import Child1 from '.Child1';

export default function Index () {
    const [arr, setArr] = useState(['a','b','c','d']);
    return (
        <>
            <div>Parent</div> 
            <Child1 alphabets={arr}/>   
        </>
    )
}