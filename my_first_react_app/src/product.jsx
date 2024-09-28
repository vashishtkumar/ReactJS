import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product({title,cuteness=0,feautres,feautres2}){
    return (
        <div className="Product">
        <h1>{title}</h1>
        <h3>Cuteness level = {cuteness}</h3>
        <h3>{feautres}</h3>
        <h2>{feautres2.mood}</h2>
        <img src={photo} alt="a cute baby" className="photo"></img>
        </div>
    )
}
