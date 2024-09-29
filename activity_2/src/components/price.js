
export default function Price({oldPrice,newPrice}){
   let styles={
    textDecorationLine:"line-through"
   }
   let newStyles={
    fontWeight:"bold"
   }
    return <div style={{backgroundColor:"yellow" , height:"30px" , borderBottomLeftRadius:"14px" ,borderBottomRightRadius:"14px"}}>
            <span style={styles}>{oldPrice} </span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
}