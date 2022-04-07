import React from "react";
import "./Accounts.css"
import lester from "./lester.jpg"

const Accounts = props => {
    console.log(props)
    return (
    <div>
        <div  className="Block"><img src={lester}></img></div>
        <p>{props.name}</p>
        
    </div>
    )
}

export default Accounts;
