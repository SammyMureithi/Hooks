import React,{useState} from 'react'

function Form() {
    const [inputData,setInputData]=useState({firstName:"",lastName:""})
    const [constactDetails,setConstactDetails]=useState([])
    function handleChange(event){
        setInputData(prevState => {
            const {name,value}=event.target
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    function handleSubmit(event){
        const {name,value}=event.target
        setConstactDetails(prevState => {
            return{
                ...prevState,
                [name] : value
            }
        })
        }
        const contacts = constactDetails.map(element => <h2 key={element.firstName+element.lastName}>{element.firstName} {element.lastName}</h2>)
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            name='firstName'
            value={inputData.firstName}
            onChange={handleChange}/>
             <input type="text"
            name='lastName'
            value={inputData.lastName}
            onChange={handleChange}/>
             <button onClick={handleSubmit}>Add contact</button>
             
        </form>
        {contacts} 
    </div>
  )
}

export default Form