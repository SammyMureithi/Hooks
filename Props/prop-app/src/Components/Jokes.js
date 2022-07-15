import React from 'react'

function Jokes(props) {
  return (
    <div>
        <h1>Setup ::{props.setup}</h1>
        <p>Punchline ::{props.punchline}</p>
        <hr></hr>
    </div>
  )
}

export default Jokes