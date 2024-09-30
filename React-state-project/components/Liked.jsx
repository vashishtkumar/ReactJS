import { useState } from "react";

function LikedButton(){

    let styles={
        color:"red",
    }
let [liked,setLiked]=useState(false);

function handleLikeBtn(){
    setLiked(!liked);
    console.log(liked);
}

return(
<div>
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