import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from './Person/Person'

const app = props =>{
  const [personState, setPersonState] = useState({
    persons:[
      {name:'Jay', age:'24'},
      {name:'bj', age:'19'},
      {name:'Mona', age:'4'},
    ],
    otherState:'some value'
  });

  console.log(personState);

  const switchNameHandler = () => {
    setPersonState({
      persons:[
        {name:'Sujay', age:'25'},
        {name:'Bijoy', age:'20'},
        {name:'Mona', age:'14'},
      ]
    });
  };


  return (
    <div className="App">
      <h1 className="App-title">Welcome to React (heading 1)</h1>
      <p className="App-intro">To get started, edit</p>
      <button onClick = {switchNameHandler}>switch Name</button>

      <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobies are play badminton</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
}

export default app;

