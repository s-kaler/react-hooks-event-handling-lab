// Code Keypad Component Here
import React from "react";

function Keypad (){

    function handleClick(event){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={handleClick}></input>
        </div>
    )
}

export default Keypad;