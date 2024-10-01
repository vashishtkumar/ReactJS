
import { useState } from "react"
export default function LudoButton(){
    
const [blueMoves,setBlueMoves]=useState(0);
const [yellowMoves,setYellowMoves]=useState(0);
const [greenMoves,setGreenMoves]=useState(0);
const [redMoves,setRedMoves]=useState(0);

function handleBlue(){
 setBlueMoves(blueMoves+1);
}
function handleYellow(){
    setYellowMoves(yellowMoves+1);
}
   function handleGreen(){
    setGreenMoves(greenMoves+1);
}
   function handleRed(){
    setRedMoves(redMoves+1);
}



    return(
        <div>
            <p>Game Begins!</p>
            <div>
                <h2>Blue Moves:{blueMoves}</h2>
                <button style={{backgroundColor:"blue" ,color:"black"}} onClick={handleBlue}>+1</button>
                <h2>Yellow Moves:{yellowMoves}</h2>
                <button style={{backgroundColor:"yellow" ,color:"black"}}onClick={handleYellow}>+1</button>
                <h2>Green Moves:{greenMoves}</h2>
                <button style={{backgroundColor:"green" ,color:"black"}}onClick={handleGreen}>+1</button>
                <h2>Red Moves:{redMoves}</h2>
                <button style={{backgroundColor:"red" ,color:"black"}} onClick={handleRed}>+1</button>
            </div>
        </div>
    )
}