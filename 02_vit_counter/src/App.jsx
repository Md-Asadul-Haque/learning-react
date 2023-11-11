import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)
  //let counter = 15
  const addValue = () =>{
    // counter = counter + 1
    if(counter < 20){
      
      setCounter(counter + 1)
    }
    // console.log("clicked",counter);
  }
  const removeValue = () =>{
    if(counter > 0){

      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Hello wellcome to Counter game</h1>
    <h2> Counter values = {counter}</h2>
    <button onClick={addValue}>Add values {counter}</button><br />
    <button onClick={removeValue}>Remove values {counter}</button>
    <p>Footer {counter}</p>
    
    </>

  )
}

export default App
