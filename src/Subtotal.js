import React from 'react';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import "./Subtotal.css";
import {getBasketTotal} from './reducer'

function Subtotal() {
  const [{basket}] = useStateValue();
  
  return (
    <div className="Subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
            Subtotal ({basket?.length} items): 
              <strong> {value}</strong>)
            </p>
            <small className="Subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        deciamalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="Subtotal-button">Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
