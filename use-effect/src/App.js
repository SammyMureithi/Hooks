import React,{useState,useEffect} from 'react'
import './App.css';
import randomcolor from "randomcolor"


function App() {
  const [count,setCount]=useState(0)
  const [color,setColor]=useState("")
  function handleClick(){
    setCount(prevCount => prevCount+1)
  }
  const styles={
    color: color
  }
  useEffect(()=> {
    setColor(randomcolor())
  },[count])
  return (
    <div className="App" >
      <h1 style={styles} >{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
