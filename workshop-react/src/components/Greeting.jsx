import React from 'react'
const d=new Date();
const Gretting = ({timeOfDay}) => {
  return (
    <div>greeting

        <h1>Good {timeOfDay}</h1>
    </div>
  )
}

export default Gretting