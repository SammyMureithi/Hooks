import logo from './logo.svg';
import React,{useState,useEffect} from 'react'
import './App.css';

function App() {
  const [text,settext]=useState("")
  const [wordCount,setWordCount]=useState(0)
  const [timer,setTimer]=useState(10)
  const [isRunning,setRunning]=useState(false)

  function handleChange(event){
    settext(event.target.value)
  }
  function handleClick(){
    if(timer> 0){
      setRunning(true)
    }
   else  if(timer==0){
      settext("")
      setTimer(15)
      setWordCount(0)
    }
   
    
  }
 
  function calculate(myText){
    const arr=myText.trim().split(" ")
    const filteredWords = arr.filter(word => word !== "")
    setWordCount(filteredWords.length) 
  }
  useEffect(()=> {
   const IntervalId=setInterval(()=>{
    if(isRunning && timer>0){
      setTimer(prevTime => {
        return  prevTime-1
      })
    }
    else if(timer===0){
      setRunning(false)
      calculate(text)
    }
   },1000)
   
   return ()=>clearInterval(IntervalId)
  },[timer,isRunning])

  const styles={
    disabled: timer===0? "disabled":""
  }
  return (
    <div className="App">
         <div>
            <h1>How fast can you type?</h1>
            <textarea onChange={handleChange} value={text} style={styles} disabled={!isRunning}/>
            <h4>Time reminaing: {timer}</h4>
            <button  disabled={isRunning} onClick={handleClick}>{timer===0?"Stopped": "Starts"}</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    </div>
  );
}

export default App;
