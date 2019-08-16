import React from 'react'
import "./Person.css";

const person = (props) => {
    return (
        <div className = "Person"> 
            <h1 onClick={props.click}>{props.name} , {props.age}</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}/>
        </div>
    );
}

export default person;