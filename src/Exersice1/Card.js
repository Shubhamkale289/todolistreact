import React from "react";


export default function Card(){
    const cardStyle ={
        width:"25%",
        border: "1px solid green"
    } 
    return (
        <>
            <div style={cardStyle}> 
                <h1>This is my card</h1>
                <p>this is my card details</p>
            </div>
        </>
    )
}