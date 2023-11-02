import React from "react";
import { useState } from "react";

export default function Form() {
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formColor, setFormColor] = useState('red');
    function handleNameChange(e){
        // console.log(e.target.value);
        setFormName(e.target.value)
    }
    function handleEmailChange(e){
        // console.log(e.target.value);
        setFormEmail(e.target.value)
    }
    function handleColorChange(e){
        // console.log(e.target.value);
        setFormEmail(e.target.value)
    }

    return (
        <form action="" >
            <input 
                type="text" 
                name="name" 
                onChange={handleNameChange} 
                value={formName}
            />
            <input 
                type="text" 
                name="email" 
                onChange={handleEmailChange} 
                value={formEmail}
            />
            <select name="" id="" onChange={handleColorChange} value={formColor}>
                <option value="red">Red</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            </select>
        </form>
    )
}
