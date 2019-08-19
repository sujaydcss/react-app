import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id : 'jxcwa',name: "Jay", age: 24 },
      { id : 'bjwssv',name: "Bj", age: 19 },
      { id : 'bvewc',name: "Mona", age: 14 }
    ],
    vanish:false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id : 'jxcwa',name: newName, age: 24 },
        { id : 'bjwssv',name: "Bijoy", age: 19 },
        { id : 'bvewc',name: "Mona", age: 15 }
      ]
    });
    console.log(this.state.persons);
  };

  deletePersonHandler = (index) => {
    const prsons = [...this.state.persons];
    prsons.splice(index,1);
    this.setState({persons:prsons});
  };

  nameChangeHandler = (event,id) => {
    console.log(this.state.persons);
    const personIndex = this.state.persons.findIndex( prsn =>{
      return prsn.id === id;
    });
    let person = {...this.state.persons[personIndex]}
    person.name = event.target.value;
    const prsons = [...this.state.persons];
    prsons[personIndex] = person;

    this.setState( {persons: prsons} );
    console.log(this.state.persons);
  };

  vanishHandler = () => {
    let tf = this.state.vanish;
    this.setState({vanish:(!tf)})
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    const style1 = {...style,
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const style2 = {...style};

    let persons = null;

    if(!this.state.vanish) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
                return <Person 
                click = {() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key = {person.id}
                changed = {(event) => this.nameChangeHandler(event,person.id)}/>
            })}
        </div>
      );

      style1.backgroundColor = 'red';
      style1[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const colorsClass = [];
    if(this.state.persons.length<=2) {
      colorsClass.push('red');
    }
    if(this.state.persons.length<=1) {
      colorsClass.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className="App-title">Welcome to React (heading 1)</h1>
          <p className={colorsClass.join(' ')}>To toggles click vanish all below, else click on the name to vanish one by one</p>

          <button
            style={style1}
            onClick={this.vanishHandler}>vanish all below</button>
          <button
            style={style2}
            onClick={this.switchNameHandler.bind(this, "Sujay")}>switch Name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium( App );
