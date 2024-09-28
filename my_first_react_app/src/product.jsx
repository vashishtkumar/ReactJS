import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product(p){
    return (
        <div className="Product">
        <h1>{p.title}</h1>
        <h3>Cuteness level = {p.cuteness}</h3>
        <img src={photo} alt="a cute baby" className="photo"></img>
        </div>
    )
}
