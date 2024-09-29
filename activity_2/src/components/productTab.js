import Product from "./product";
import "./productTab.css"
function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"

    }
    return(
<div style={styles}>
    <Product title="Logitech Mx Master" index={0}/>
    <Product title="Apple Pencil (2nd Gen)"  index={1}/>
    <Product title="Zebronics" index={2} />
    <Product title="Petronics Toad"  index={3}/>
</div>

    )
}

export default ProductTab;