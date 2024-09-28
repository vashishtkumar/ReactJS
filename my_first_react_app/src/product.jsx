import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product({title,cuteness=0}){
    return (
        <div className="Product">
        <h1>{title}</h1>
        <h3>Cuteness level = {cuteness}</h3>
        <img src={photo} alt="a cute baby" className="photo"></img>
        </div>
    )
}
