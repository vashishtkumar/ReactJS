export default function Count(){
    let count=0;

    function increament(){
        count+=1;
console.log(count);
    }
    
    return (
        <>
        <h1>count = {count}</h1>
       <button onClick={increament}>click me to increase</button>
        </>
    )
} 