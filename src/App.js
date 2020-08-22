// import React, {Component} from 'react'
// import './App.css';
// import Person from './components/Person'

// class App extends Component {

//   state = {
//     persons: [{name: 'dinesh', age: 30},
//               {name: 'mohana', age: 25}],
//               flag: false
//   }

//   clickHandler = () =>{
//     this.setState({
//       flag: !this.state.flag
//     })
//   }

//   changeHandler = event => {
//     this.setState({
//       persons: [{name: 'dinesh', age: 30},
//               {name: event.target.value, age: 25}]
//     })
//   }

//   deleteHandler = personIndex => {
//     const persons = [...this.state.persons]
//     persons.splice(personIndex, 1)
//     this.setState({
//       persons: persons
//     })
//   }

//   render(){
//     let persons = null
//     if(this.state.flag){
//      persons=(this.state.persons.map((person, index) => 
//         <Person name={person.name} age={person.age} change={this.changeHandler} delete={this.deleteHandler.bind(this, index)} />
//       ))
//     }
    
//     return(
//       <div>
//         <h1> I'm React App</h1>
//         <button onClick={this.clickHandler}>Show names</button>
//         {persons}
//       </div>
//     )
//   }
// }

// export default App




import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component  {

  state = {
    persons: [
      {name: 'Dinesh', age: 30},
      {name: 'Mohana', age: 25}
    ],
    showContent: false
  }

  // SwitchNameHandler = (newName) => {
  //   console.log('Clicked')
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 31},
  //       {name: 'Mohana Reddy', age: 25}
  //     ]
  //   })
  // }

  deleteHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }



  toggleContent = () => {
    const curState = this.state.showContent
    this.setState({
      showContent: !curState
    })
  }

  changeTextHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Dinesh', age: 31},
        {name: event.target.value, age: 25}
      ]
    })
  }

  render(){
    let persons = null
    if(this.state.showContent){
      persons=(<div>
          {this.state.persons.map((person, index) => <Person name={person.name} 
                                                    click={this.deleteHandler.bind(this, index)}
                                                    age={person.age} 
                                                    changed={this.changeTextHandler}
                                                    key={person.age}/>)
                                                    }
      </div>)
    }
    return (
      <div className="App">
        <h1>I'm React App</h1>
        <button onClick={this.toggleContent}>Show Names</button>
        {persons}
      </div>
    )
  }
  
}

export default App;
