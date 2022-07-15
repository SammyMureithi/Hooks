import React from 'react'
import logoa from './star-solid-24.png'

//C:\Users\USER\Desktop\MoringsReact\scrimba1\src\images\img-2.png


function Card(props) {
 
  return (
    <div id='mainCard'>
    <div id="card">
        <div id='img'>
            <button>{props.state}</button>
           
        </div>
                
            <div id="details">
               <div id="line1">
                <img src={logoa} alt="star"/>
                <h3>5.0(6).{props.name}</h3>
               </div>
               <p>Life lessons with {props.salesman}</p>
               <div id='bottom'>
           <p><span className='bold'>From {props.currency}{props.price}</span>/person</p>
                
               </div>
            </div>
       
    </div>
    </div>
  )
}

export default Card