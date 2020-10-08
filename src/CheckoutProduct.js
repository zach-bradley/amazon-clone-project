import React from 'react';
import {useStateValue} from './StateProvider';
import "./CheckoutProduct.css";


function CheckoutProduct({id, image,title,price,rating}) {
  const [basket, dispatch] = useStateValue(); 
  const removeFromBasket = () => {
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id: id
    })
  }
  return (
    <div className="CheckoutProduct" id={id} key={id}>
      <img className="CheckoutProduct-image" src={image} alt={title} />
      <div className="CheckoutProduct-info">
        <p className="CheckoutProduct-title">{title}</p>
        <p className="CheckoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct-rating">
          {Array(rating).fill().map((_,i) => (
            <span role="img" aria-label="rating">⭐</span>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
