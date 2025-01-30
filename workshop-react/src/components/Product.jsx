import React from 'react'

const Product = (props) => {
  return (
    <div>
      product mark is {props.mark}
      <p>product price is {props.price}</p>
    </div>
  )
}

export default Product