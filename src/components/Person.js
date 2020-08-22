// import React from 'react'


// const person = props => { 
//     const {name, age} = props
//     return(
//         <div >
//             <p onClick={props.delete}>I'm {name} and I'm {age} years old</p>
//             <input type='text' value={name} onChange={props.change} />
//         </div>
//     )
// }

// export default person








































import React from 'react'

const person = (props) => {
    const {name, age} = props
return (
        <React.Fragment>
            <h1 onClick={props.click}>I'm {name} and I'm {age} </h1>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={name}/>
        </React.Fragment> 
) 
}

export default person