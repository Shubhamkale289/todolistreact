import React, { useState } from 'react'

export default function App() {
    // const [formName, setFormName] = useState("");
    // const [formEmail, setFormEmail] = useState("");
    // const [formColorDropdown, setColorDropdown] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        color: 'red'
    });
    const [formErrData, setFormErrData] = useState({
        name: '',
        email: '',
        color: ''
    })

    // handling form data
    function handleFormData(e) {
        //setFormData()
        const { name, value } = e.target;
        setFormErrData((prevData)=>({
            ...prevData,
            [name]:'',
        }))
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    function formValidation(){
        let isError = false;
        for (let field in formData){
            if(formData[field] === ""){
                formErrData[field] = `${field} is required value`;
                isError = true;
            }
        }
        return isError;
    }

    // onclicking the submit button this function executed
    function submitForm(e) {
        // console.log(e)
        e.preventDefault();
        console.log(formData);
        // handled api call, I need to show the blanks again ->
        if(!formValidation()){
            return;
        }
        console.log('api call submitted')
        setFormData({
            name: '',
            email: '',
            color: 'red'
        })
    }
    
    return (
        <form action="" onSubmit={submitForm} style={{display:'flex', flexDirection:'column', rowGap: '20px'}}>
            <div>
                <input
                    type="text"
                    name="name"
                    onChange={handleFormData}
                    value={formData.name}
                />
                {formErrData.name && <div> {formErrData.name} </div>}
            </div>
            <div>
                <input
                    type="text"
                    name="email"
                    onChange={handleFormData}
                    value={formData.email}
                />
                {formErrData.email && <div> {formErrData.email} </div>}
            </div>
            <div>
                <select
                    name="color"
                    value={formData.color}
                    onChange={handleFormData}
                >
                     <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
                {formErrData.color && <div> {formErrData.color} </div>}
            </div>

            <div>
                <button >submit form</button>
            </div>
        </form>
    );  
}