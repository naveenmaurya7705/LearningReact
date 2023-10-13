import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setCouter] = useState(15)



  // if(counter<=20){

  //   const addValue =() =>{

      
  //     setCouter(counter + 1)
     
  //    }
  // }

  const addValue =() =>{
    console.log('value added', Math.random(),counter)
    
    setCouter(prevcounter => prevcounter + 1)
    setCouter(prevcounter =>prevcounter + 1)
    setCouter(prevcounter =>prevcounter + 1)
    setCouter(prevcounter =>prevcounter + 1)
   
   }

 
  const removeValue =()=>{
    setCouter(counter-1)

  }

  return (
    <>
    
      
   
      <h1>Welcome to this site</h1>
      {/* <button onClick={addValue}>up counter {counter}</button> */}
      {/* <button onClick={removeValue}>down counter</button> */}

        <button onClick={addValue}>up counter {counter}</button>
        <br />
          <br />
        
        <button onClick={removeValue}>down counter {counter}</button>

      
    </>
  )
}

export default App
