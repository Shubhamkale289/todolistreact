import React from "react";
import { FaBeer, FaAtlassian } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App(){
    const notify = () => toast("Wow so easy!");

    return (
        <>
            <div>App</div>
            Lets go for a <FaBeer />
            Lets go for a <FaAtlassian />
            <button onClick={notify}>Notify!</button>
            <ToastContainer position="bottom-center"/>
        </>
    )
}