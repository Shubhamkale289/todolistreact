import React, { useState } from "react";

export default function Abc(){
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        color:'red'
    });

    function handleFormData(e){
        const {name, value} = e.target;
        //setFormdata
        setFormData((prevData)=>{
            return {
                ...prevData, // Use the spread operator to copy the previous state
                [name]: value, // Update the specific field in the form data
            };
        })
    }

    return (
        <form action="">
            <input 
                type="text" 
                name="name" 
                onChange={handleFormData} 
                value={formData.name}
            />
            <input 
                type="text" 
                name="email" 
                onChange={handleFormData} 
                value={formData.email}
            />
            <select 
                name="color" 
                id="" 
                onChange={handleFormData} 
                value={formData.color} 
            >
                <option value="red">Red</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            </select>
        </form>
    )
}