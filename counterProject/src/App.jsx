import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue=()=>{
    if(count<20)
    setCount(count+1);
  }

   const subvalue=()=>{
    if(count>0)
    setCount(count-1);
  }

  return (
    <>
      <h1>count:{count}</h1>

      <button onClick={addvalue}>Increase</button>

      <button onClick={subvalue} >Decrease</button>
        
    </>
  )
}

export default App
