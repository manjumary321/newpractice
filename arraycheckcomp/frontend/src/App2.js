import { useState } from "react";
function App2({ array, handleChange }) {
    // const handleChange=()
    return <>
        {array.map((itm, indx) => {
            return <>
                <input type={"checkbox"} onChange={e => handleChange(e, indx)} checked={itm.ischecked}/>
                <label>{itm.name}</label><br/>
            </>
        })}
    </>
}
export default App2;
                   