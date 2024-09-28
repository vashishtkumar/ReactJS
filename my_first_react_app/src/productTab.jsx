import Product from "./product";

function MulProduct(){
     let company=[<li>asus</li>,<li>dell</li>,<li>apple</li>,<li>msi</li>];
return(
    <>
    <Product title="laptop" desc="A shop for sale and buy of various compny laptop" company={company}/>
    </>
)
}

export default MulProduct;