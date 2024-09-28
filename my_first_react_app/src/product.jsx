import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product(){
    return (
        <div className="Product">
        <h1>product</h1>
        <h3>product description</h3>
        <img src={photo} alt="a cute baby" className="photo"></img>
        </div>
    )
}
