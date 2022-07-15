import React from 'react'
import Data from './Data'
import ListItemComponent from './ListItemComponent'

function ListComponent() {
  const elements=Data.map((element) =>{
    return <ListItemComponent 
    {...element}
    />
  })
  return (
    <div>
    {elements}
    </div>
  )
}

export default ListComponent