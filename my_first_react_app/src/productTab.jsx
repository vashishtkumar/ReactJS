import Product from "./product";
let feautres2={"angry":20, mood:"good" }
function MulProduct(){
    let feautres=["cute " ,"loving ","nature lover"]
return(
    <>
    <Product title="Cute Girl" cuteness="100" feautres={feautres} feautres2={feautres2}/>
    <Product title="Lovely Girl" cuteness={200} feautres={feautres} feautres2={feautres2}></Product>
    <Product title="inoccent girl" feautres={feautres} feautres2={feautres2}/>
    </>
)
}

export default MulProduct;