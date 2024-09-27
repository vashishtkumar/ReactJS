import photo from "./assets/photo.jpg"
export default function Product(){
    return (
        <>
        <h1>product</h1>
        <h3>product description</h3>
        <img src={photo} alt="a cute baby" className="photo"></img>
        </>
    )
}
