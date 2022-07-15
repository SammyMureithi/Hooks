import React from 'react'

function Jokes(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.punchline}</p>
    </div>
  )
}

export default Jokes