import React  from 'react'

//example of a simple react component 
const animal = (props)=>{
    
    return(
        <div>
            <div>i am {props.name} and i have {props.age}</div> 
            <div>{props.children}</div> 
        </div>
    )
}
export default animal
