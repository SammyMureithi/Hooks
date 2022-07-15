import React from 'react'
import Data from './Data'
import ListItemComponent from './ListItemComponent'

function ListItem() {
const details=Data.map(detail =>{
    return <ListItemComponent
    image={detail.image} condition={detail.condition} title={detail.title}
    description={detail.description} price={detail.price} rating={detail.stats.rating}
    reviewCount={detail.stats.reviewCount} location={detail.location} saleOption={detail.openSpots}/>
})
console.log(details)
  return (
    <div>
        {details}
    </div>
  )
}

export default ListItem