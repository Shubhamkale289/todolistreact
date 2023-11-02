import React, {useState} from "react";


const keywords = ["apple", "banana", "cat", "dog", "elephant", "flower", "guitar", "hiking", "ice cream", "jazz", "kangaroo", "lighthouse", "mountain", "notebook", "ocean", "piano", "quokka", "rainbow", "sunshine", "tropical"];
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default function RenderingApp(){
    const [obj, setObj] = useState({'a':100});
    function updateObjectRandomly(){
        const alphabetArrayKeyIndex = Math.floor(Math.random()*alphabetArray.length)-1;
        const keywordsValueIndex = Math.floor(Math.random()*keywords.length)-1;
        const newObj = {[alphabetArray[alphabetArrayKeyIndex]] : [keywords[keywordsValueIndex]]};
        setObj((prev)=>{
            return {...prev, ...newObj}
        })
    }
    return (
        <>
            {Object.keys(obj).map((objKey)=>{
                return (
                    <div style={{display:'flex', gap:'10px'}}>
                        <span>{objKey}</span>
                        <span>{obj[objKey]}</span>
                    </div>
                )
            })}
            <button onClick={updateObjectRandomly}>update Object randomly</button>
        </>
    )
}
