import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <h4> click on the button for changing the Background.</h4>
    
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='Fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>
            RED
          </button>
          <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>
            GREEN
          </button>
          <button onClick={()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>
            BLUE
          </button>
          <button onClick={()=> setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>
          yelllow
          </button>
          <button onClick={()=> setColor('aqua')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"aqua"}}>
           Aqua
          </button>
          <button onClick={()=> setColor('pink')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>
            PINK
          </button>
          <button onClick={()=> setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>
            Black
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
