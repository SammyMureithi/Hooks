import './App.css';
import React,{useEffect, useRef, useState} from 'react'

function App() {
  const[inputValue,setInputValue]=useState("")
  const count=useRef(0)

  useEffect(() => {
    count.current=count.current+1
  },[inputValue])
  return (
    <div className="App">
      <>
      <input 
           type="text"
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}/>
           <h1>Render Count: {count.current}</h1>
      </>
    </div>
  );
}

export default App;
