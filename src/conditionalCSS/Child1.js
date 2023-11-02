import React from 'react';


export default function Child1 ({alphabets}) {
    return (
        <>
            {alphabets.map((alphabet)=>(
                <div>{alphabet}</div>
            ))}
        </>
    )
}