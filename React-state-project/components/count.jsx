import {useState} from "react";

export default function Count(){
    
let arr=useState(10);
console.log(arr); // it will return an array exactly have two values

let [stateVariable,setStateVariable]=useState(0);

// state for counter
let [count,setCount]=useState(0);

let increment=()=>{
setCount(count+1);
console.log(count);
}
    
    return (
        <>
        <h1>count = {count}</h1>
       <button onClick={increment}>click me to increase</button>
        </>
    )
} 

// as count is not updating because component is not re-rendering