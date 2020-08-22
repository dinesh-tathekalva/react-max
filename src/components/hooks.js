// import React, { useState } from 'react';
// import './App.css';
// import Person from './components/Person';

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Dinesh', age: 30},
      {name: 'Mohana', age: 25}
    ], 
    otherState: 'some value'
  })

  const [otherState, setOtherState] = useState('some value')
  
  console.log(personState, otherState)

  const switchNameHandler = () => {
    console.log('Clicked')
    setPersonState({
      persons: [
        {name: 'Dinesh Reddy', age: 31},
        {name: 'Mohana Reddy', age: 25}
      ],
    })
    setOtherState({
      otherState: 'updated the other state'
    })
    console.log(otherState)
  }

  
    return (
      <div className="App">
        <h1>I'm React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} > My Hobbies: Astronomy </Person>
        <Person name={personState.persons[1].name}  age={personState.persons[1].age} />
      </div>
    )

  
}

export default App;













