function Message(props){
return(
    <>
    <h1>Hello <span style={{color:props.color}}>{props.name}</span></h1>
    </>
)
} 

export default Message;