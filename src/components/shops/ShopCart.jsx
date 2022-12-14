import React, { useState } from "react"

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  } 
  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt=''/>
              </div>
              <div className='product-details'>
              <h5>{shopItems.name}</h5>
                <h4>${shopItems.price}.00 </h4>
                <p>{shopItems.desc}</p>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
                <div className='product-like'>
                  <label>{count}</label>
                  <i className='fa-regular fa-heart' onClick={increment}>Watch</i>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
