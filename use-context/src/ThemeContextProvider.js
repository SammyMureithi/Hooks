import React,{createContext, Component} from 'react'

const ThemeContext=createContext()

class ThemeContextProvider extends Component {
  state={
    theme:"dark"
  }
  handleClick=()=>{
     this.setState(prevState =>  {
      return{
        theme: prevState.theme==="dark"?"light":"dark"
      }
     })
   }
  render() {
    return (
      <ThemeContext.Provider value={{theme: this.state.theme,toggle:this.handleClick}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
export  {ThemeContextProvider ,ThemeContext}