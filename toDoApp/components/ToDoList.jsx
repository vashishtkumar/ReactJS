import {useState} from "react"

export default function Todolist(){
const [todos,setTOdos]=useState(["sampleTask"]);
const [newTodo,setNewTodo]=useState("");
let addNewtask=()=>{
    if(newTodo.trim()){
    setTOdos([...todos,newTodo]);
    console.log("we have to add new task");
    setNewTodo("");
    }
}

    let updateTodoValue=(event)=>{
    console.log(event.target.value);
    setNewTodo(event.target.value);
}

let handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNewtask();
    }
  };

    return(
        <div>
            <input placeholder="Enter your task"  value={newTodo} onChange={updateTodoValue} onKeyDown={handleKeyDown} ></input>
            <br></br>
            <button onClick={addNewtask}>Add</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h3>Task To DO</h3>
            <ul>
                {
                    todos.map((item)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}