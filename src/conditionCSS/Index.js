import React, {useState} from "react";
import './style.css';
import Child from "./Child";

export default function Index() {
    const [isError, setIsError] = useState(false);
    return (
        <>
            {/* <div style={isError ? {color: 'red'} : {color: 'green'}}>Index</div> */}
            
            <div className="negative">Negative</div>
            <div className="positive">Positive</div>

            <h1>conditional rendering of clssName</h1>

            <div className={ isError ? 'negative common':'positive common ' }>Sorted</div>
            <div className={ `common ${isError ? 'negative':'positive'}` }>Sorted</div>
            {/* <div className= 'common' ${ !isError ? 'negative':'positive'}>Sorted</div> */}


            {!isError && <div>Index2</div>}
            {!isError ? <div>Index3</div> : null}
            <Child  />
        </>
    )
}