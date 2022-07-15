import React from 'react'
import Data from './Data'

function ListItemComponent(props) {
  return (
    <div>
        <div id="semiMain">
            <img src={`./images/${props.image}`} alt="1"></img>
            <div id='left'>
                <div id='L1'>
                  <img src='./images/map-solid-24.png' alt='location'/>
                  <h3>{props.location}</h3>
                  <a href='#link'>View on Google map</a>
                </div>
                <div id='L2'>
                    <h1>{props.title}</h1>
                </div>
                <div id='L3'>
                    <h3>{props.from}- {props.to}</h3>
                </div>
                <div id='L4'>
                    <p> {props.Description}   </p>
                </div>
                
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default ListItemComponent