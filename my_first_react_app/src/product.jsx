import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product(props){
    return (
        <div className="Product">
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
        <ol>{props.company}</ol>
        </div>
    )
}
