import React,{useContext} from 'react'
import {ThemeContext} from '../ThemeContextProvider'

function TopHeader() {
  const context=useContext(ThemeContext)
  return (
        <div className={context.theme+`-theme`}>
        <h1>{context.theme==="light"?"Light":"Dark"} Mode</h1>
        <h1>Click the Button below to change theme</h1>
    </div>
  
  )
}

export default TopHeader