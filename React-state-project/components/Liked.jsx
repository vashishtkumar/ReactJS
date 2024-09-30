import { useState } from "react";

function LikedButton(){

    let styles={
        color:"red",
    }

let [liked,setLiked]=useState(false);

const [click,setClick]=useState(0);

function handleLikeBtn(){
    setLiked(!liked);
    setClick(click+1);
    console.log(liked);
}

return(
<div>
<h2>clicks={click}</h2>
{   
    liked?
    <i class="fa-solid fa-heart" onClick={handleLikeBtn} style={styles}></i>:
    <i className="fa-regular fa-heart" onClick={handleLikeBtn} ></i>
}
<p>{liked.toString()}</p>
</div>
)
}

export default LikedButton;