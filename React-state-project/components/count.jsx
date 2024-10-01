import {useState} from "react";

export default function Count(){
    
// state for counter
let [count,setCount]=useState(0);
console.log(`count after rendering ${count}`);

let increment=()=>{

    //setCount(count+1);
    //setCount(count+1);
setCount((currentValue)=>{  // call back in state function
   return currentValue+1});  // return is must
setCount((currentValue)=>{
   return currentValue+1});  // return  is must

console.log(`inner count =${count}`);
}
    
    return (
        <>
        <h1>count = {count}</h1>
       <button onClick={increment}>click me to increase</button>
        </>
    )
} 

// as count is not updating because component is not re-rendering