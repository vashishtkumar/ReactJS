import {useState} from "react";

export default function Count(){
    
let arr=useState(10);
console.log(arr); // it will return an array exactly have two values

let [StateVariable,setStateVariable]=useState(0);

// state for counter
let [Count,setCount]=useState(0);

let increment=()=>{
setCount(Count+1);
console.log(Count);
}
    
    return (
        <>
        <h1>count = {Count}</h1>
       <button onClick={increment}>click me to increase</button>
        </>
    )
} 

// as count is not updating because component is not re-rendering