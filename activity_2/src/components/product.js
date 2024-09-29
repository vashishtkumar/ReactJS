import "./product.css"
import Price from "./price";
export default function Product({title,index}){
    let oldPrice=["12,495", "11,900" , "1,599", "599"];
    let newPrice=["8,999", "9,199", "899" ,"278"];
    let desc=[["8000 DPI","5 Programmable Buttons"],["Intuitive Touch Surface","Designed for ipad Pro"],["Designed for ipad Pro","Intuitive Touch Surface"],["wireless Mouse 2.4GHz","Optical Orientation"]]
return(
    <div className="Product">
        <h4>{title}</h4>
        <p>{desc[index][0]}</p>
        <p>{desc[index][1]}</p>
        <Price oldPrice={oldPrice[index]} newPrice={newPrice[index]}/>
    </div>
)
}