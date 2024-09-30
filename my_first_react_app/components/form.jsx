function handleSubmit(event){
    event.preventDefault();
    console.log(event);
    console.log("form has been submitted");
}

export default function Form(){
    return(
        <>
        <form >
            <input type="text" placeholder="write your text" />
            <input type="submit" value="submit" onClick={handleSubmit}/>
        </form>
        </>
    )
}