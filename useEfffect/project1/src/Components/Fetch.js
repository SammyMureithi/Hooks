import React,{useState}from 'react'

function Fetch() {
    const [startWarData,setStarWarData]=useState({})
    React.useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
    .then(res => {
        if(res.ok){
            console.log("Fetch successful")
        }
        else{
            console.log("Unsucceful fetch")
        }
        return res
    })
    .then(res => res.json())
    .then(data => setStarWarData(data))
    //here we are instructing our dependancies array to on run the useEffect only once when the page loads

    }, [])
    
  return (
    <div>
        <pre>{JSON.stringify(startWarData,null,2)}</pre>
    </div>
  )
}

export default Fetch