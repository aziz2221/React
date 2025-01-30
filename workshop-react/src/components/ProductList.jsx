import React from 'react'

const ProductList = () => {
    const products=[
{id:1,name:"Phone",price:"$588"},
    {id:2,name:"Laptop",price:"$1,588"},
    {id:3,name:"HeadPhones",price:"$388"},
    ]
  return (
    <div>ProductList    
     {products.map(({id,name,price})=>(

        <ol key={id}>
            <li>{name}   {price}{id}</li>
        </ol>

     ))}



    </div>
  )
}

export default ProductList