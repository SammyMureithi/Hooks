import React,{useState,useEffect} from "react"
import './App.css';
import randomcolor from "randomcolor"

function App() {
  const [count,setCount]=useState(0)
  const [color,setColor]=useState("")
  useEffect(() => {
    const inetrvalId=setInterval(() => {
      setCount(prevCount => prevCount+1)
    },1000)
    return ()=> clearInterval(inetrvalId)
  },[])
  useEffect(()=>{
    setColor(randomcolor())
  },[count])
  return (
    <div className="App">
      <p style={{color: color}}> {count}</p>
   

    </div>
  );
}

export default App;
