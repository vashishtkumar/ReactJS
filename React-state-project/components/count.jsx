import {useState} from "react";

export default function Count(){

let init=() =>{
    console.log("init called again");
    return Math.random();
}
// state for counter
let [count,setCount]=useState(init);   // if you want to call only once then use init and if init is executed every time then init();
console.log("re - render occurs");
let increment=()=>{

   // setCount(25);                      // so here only once rerender occurs
    setCount(count+1);
    //setCount(count+1);
// setCount((currentValue)=>{  // call back in state function
//    return currentValue+1});  // return is must
// setCount((currentValue)=>{
//    return currentValue+1});  // return  is must

}
    
    return (
        <>
        <h1>count = {count}</h1>
       <button onClick={increment}>click me to increase</button>
        </>
    )
} 

// as count is not updating because component is not re-rendering