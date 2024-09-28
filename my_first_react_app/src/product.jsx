import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product(props){
   return(
        <div className="Product">
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
        {props.price> 30000 ? <p>discount of {10/2} %</p>:<a href="#">click for discount</a>}
        </div>
    )
   
}
