import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Jay", age: "24" },
      { name: "Bj", age: "19" },
      { name: "Mona", age: "4" }
    ],
    vanish:false
  };

  switchNameHandler = newName => {
    // console.log('switch clicked');
    this.setState({
      persons: [
        { name: newName, age: "25" },
        { name: "Bijoy", age: "20" },
        { name: "Mona", age: "14" }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: "25" },
        { name: "Bijoy", age: "20" },
        { name: "Mona", age: "14" }
      ]
    });
  };

  vanishHandler = () => {
    let tf = this.state.vanish;
    this.setState({vanish:(!tf)})
  }

  
  render() {
    const style = {
      backgroundColor: "green",
      fontSize: "25px",
      padding: "8px"
    };

    let persons = null;
    if(!this.state.vanish) {
      persons = (
        <div>
            <button
              style={style}
              onClick={this.switchNameHandler.bind(this, "Sujay")}
            >switch Name</button>
            {
              this.state.persons.map(person => {
                return <Person name={person.name} age={person.age}/>
              })
            }
            {/* <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Sourav")}
              changed={this.nameChangeHandler}/>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}> My hobies are play badminton </Person> */}
        </div>
      )
    }
  

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React (heading 1)</h1>
        <p className="App-intro">To get started, edit</p>

        <button
            style={style}
            onClick={this.vanishHandler}
          >vanish all below</button>
          {persons}
      </div>
    );
  }
}

export default App;
