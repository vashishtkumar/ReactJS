function handleClick(){
    console.log("clciked");
}


let handleMoueOver=()=>{
    console.log("mouse hovered");
}

let handleDoubleClick=function(){
    console.log("double click");
}
export default function Button(){
return (<>
    <button onClick={handleClick}>click</button>
    <p onClick={handleClick}> click me to chnage content</p>
    <p onMouseOver={handleMoueOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem ad architecto saepe nisi voluptatum libero optio nihil, praesentium odio cum accusamus dolor, quidem adipisci quaerat quasi ab sed culpa.</p>
    <button onDoubleClick={handleDoubleClick}>Double click me remember donot use doubleclick()</button>
    </>
)
}