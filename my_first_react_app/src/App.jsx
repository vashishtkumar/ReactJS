import './App.css'
import {Header,Title} from "./Title"   // here it is necessary you have to name through which you have exported
import MulProduct from './productTab'
import Button from '../components/button'
import Form from '../components/form'

function App() {
  

  return (
    <>
    <Form/>
    <Button></Button>
    <MulProduct></MulProduct>
    </>
  )
}

export default App
