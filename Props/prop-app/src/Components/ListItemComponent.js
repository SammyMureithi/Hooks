import React from 'react'

function ListItemComponent(props) {
    let badge;
    let id;
    console.log(props.saleOption)
    if(props.saleOption==0){
        badge="ONLINE"
        id="onlineId"
    }
    else if(props.saleOption==3){
        badge="Sold"
        id="soldId"
    }
    else if(props.saleOption==27){
        badge="ON SALE"
        id="onsaleId"
    }
  return (
    <div id='mainCard'>
    <div id="card">
   <div id="bgImg" style={{ backgroundImage: `url(../images/${props.image})`  } }>
           
            {badge && <button id={id}>{badge}</button>}
        </div>
        <div id='details'>
            <div id='line1'>
            <img src='../images/star-solid-24.png' alt='rate'/>
            <h3>{props.rating}</h3>
            <h3>({props.reviewCount})</h3>
            <h3>{props.location}</h3>
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p><span>Kes.{props.price}</span> / person</p>
        </div>

    </div>
    </div>
  )
}

export default ListItemComponent