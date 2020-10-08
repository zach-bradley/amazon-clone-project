import React from 'react';
import "./Product.css";
import {useStateValue} from "./StateProvider";


function Product({id, title, image, price ,rating}) {
  const [{},dispatch] = useStateValue();  
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className="Product" key={id} id={id}>
      <div className="Product-info">
        <p>{title}</p>
        <p className="Product-price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <p className="Product-rating">
          {Array(rating).fill().map((_,i) => (
            <span role="img" aria-label="rating">⭐</span>
          ))}
        </p>
      </div>
      <img src={image} alt={title}/>

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
