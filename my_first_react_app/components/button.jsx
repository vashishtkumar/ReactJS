function Print(){
    console.log("An event has been occured");
}


function demo(){
console.log("bye!");
}

export default function Button(){
return (<>
    <button onClick={Print}>click</button>
    <p onClick={demo}> click me to chnage content</p>
    </>
)
}