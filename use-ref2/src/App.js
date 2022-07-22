import React ,{useRef} from 'react'
import './App.css';

function App() {
  const inputElement=useRef()
  const focusInput=()=>{
    inputElement.current.focus()
  }
  return (
    <div className="App">
     <input 
          type="text"
          ref={inputElement}/>
          <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
