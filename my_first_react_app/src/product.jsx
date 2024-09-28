import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product(props){
    
    if(props.price > 30000){
    return (
        <div className="Product">
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
        <p>discount of 5%</p>
        </div>
    )}
    else
    return(
    <div className="Product">
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
        <a href="#">click to get discount</a>
        </div>
    )
}
