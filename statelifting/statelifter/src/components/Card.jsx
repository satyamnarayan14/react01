import React from 'react'

const Card = (props) => {
  return (
    <>
        <input type="text" onChange={(e)=>props.setName(e.target.value)} />
        <p>name state variable ki value inside card {props.title}:{props.name}</p>
    </>
  )
}

export default Card