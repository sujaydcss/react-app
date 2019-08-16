import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'Jay', age:'24'},
      {name:'Bijoy', age:'19'},
      {name:'Mona', age:'4'},
    ]
  }

  switchNameHandler = () => {
    // console.log('switch clicked');
    this.setState({
      persons:[
        {name:'Sujay', age:'25'},
        {name:'Bijoy Mondal', age:'20'},
        {name:'Mona', age:'14'},
      ]
    })
  }

  render() {
    return (
        <div className="App">
          <h1 className="App-title">Welcome to React (heading 1)</h1>
          <p className="App-intro">To get started, edit</p>

          <button onClick = {this.switchNameHandler}>switch Name</button>

          <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobies are play badminton</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

        </div>
      );
  }
}

export default App;
