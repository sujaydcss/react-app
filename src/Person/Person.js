import React from 'react'
import "./Person.css";
import Radium from "radium";

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className = "Person"> 
            <h1 onClick={props.click}>{props.name} , {props.age}</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}/>
        </div>
    );
}

// export default (person);
export default Radium(person);