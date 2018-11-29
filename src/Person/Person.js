import React  from 'react'

//example of a simple react component 
const person = (props)=>{

    return(
        <div>
            i am {props.name} and i have {props.age}
        </div>
    )
}
export default person
