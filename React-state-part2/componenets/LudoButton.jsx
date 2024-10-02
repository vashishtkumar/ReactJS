
import { useState } from "react"
export default function LudoButton(){
    
const [moves,setMoves]=useState({blue:0,yellow:0,red:0,green:0});
const [arr,setArr]=useState(["no moves "]);

function handleBlue(){
    moves.blue=moves.blue+1;
    console.log(`moves.blue = ${moves.blue}`);   
 //setMoves(moves);   // as it will increament becuse only data is updated not the reference

 setMoves({...moves});   // spread operator is used here that it will create copy
}

function handleYellow(){
   //setMoves({...moves,yellow:moves.yellow+1});
   //arr.push("moves ");
   // setArr([...arr]);   it can be used as callback as well

   setArr((prevVal)=>{
      return [...arr,"moves "];
   })


    console.log(arr);

}
   function handleGreen(){
    setMoves({...moves,green:moves.green+1});
}
   function handleRed(){

    setMoves((prevVal)=>{
        
        return {...prevVal,red:prevVal.red+1};
    }
)
}



    return(
        <div>
            <p>Game Begins!</p>
            <div>
                <h2>Blue Moves:{moves.blue}</h2>
                <button style={{backgroundColor:"blue" ,color:"black"}} onClick={handleBlue}>+1</button>
                <h2>Yellow Moves:{moves.yellow}</h2>
                <p>{arr}</p>
                <button style={{backgroundColor:"yellow" ,color:"black"}}onClick={handleYellow}>+1</button>
                <h2>Green Moves:{moves.green}</h2>
                <button style={{backgroundColor:"green" ,color:"black"}}onClick={handleGreen}>+1</button>
                <h2>Red Moves:{moves.red}</h2>
                <button style={{backgroundColor:"red" ,color:"black"}} onClick={handleRed}>+1</button>
            </div>
        </div>
    )
}