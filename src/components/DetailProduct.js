import React from 'react'

const DetailProduct = ({cookie}) => {
      
      return (
            <div>
                <img alt={cookie.name} src={cookie.image} />
            <p>{cookie.name}</p>
            <p className="product-price">{cookie.price} KD</p>
            <p>{cookie.describtion}</p>  
            </div>
      )
}

export default DetailProduct
