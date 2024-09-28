import photo from "./assets/photo.jpg"
import "./product.css"
export default function Product(props){
    let result=props.company.map((item)=>{
        return <li>{item}</li>
    })
    return (
        <div className="Product">
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
        <ul style={{listStyleType:"square"}}>{result}</ul>
        </div>
    )
}
