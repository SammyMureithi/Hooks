import React,{useContext} from 'react'
import {ThemeContext} from '../ThemeContextProvider'

function Buttons (){
  const context=useContext(ThemeContext)
  return (
    <button onClick={context.toggle} 
    className={`${context.theme}-theme`}>Switch Theme</button>
       
)    
}



export default Buttons