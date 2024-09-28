import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product(props){
    return (
        <div className="Product">
        <h1>{props.title}</h1>
        <h3>Cuteness level = {props.cuteness}</h3>
        <img src={photo} alt="a cute baby" className="photo"></img>
        </div>
    )
}
