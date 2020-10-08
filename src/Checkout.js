import React from 'react';
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className="Checkout">
      <div className="Checkout-left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/ku/pd20new2/ILM_650x45_50percentoff._CB403851087_.jpg" alt="ad" className="Checkout-ad"/>
        <div>
          <h2 className="Checkout-title">
            Your Shopping Basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>      
      </div>
      <div className="Checkout-right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
