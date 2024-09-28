import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product(props){
    let result=props.price > 30000 ? "discount of 5 %":"";
    return (
        <div className="Product">
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
        <p>{result}</p>
        </div>
    )
   
}
