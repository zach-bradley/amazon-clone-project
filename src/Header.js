import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import {useStateValue} from './StateProvider';
import { auth } from './firebase'
import "./Header.css";



function Header() {
  const [{basket, user}] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className="Header">
      <Link to="/">
        <img className="Header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"></img>      
      </Link>
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <SearchIcon className="Header-searchIcon" />
      </div>
      <div className="Header-nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="Header-option">
            <span className="Header-optionLineOne">Hello {user ? user.email : 'Guest'}</span>
            <span className="Header-optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>      
        </Link>
        <div className="Header-option">
          <span className="Header-optionLineOne">Returns</span>
          <span className="Header-optionLineTwo">& Orders</span>
        </div>
        <div className="Header-option">
          <span className="Header-optionLineOne">Your</span>
          <span className="Header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="Header-optionBasket">
            <ShoppingBasketIcon />
            <span className="Header-optionLineTwo Header-basketCount">{basket.length > 0 ? basket.length : 0}</span>
          </div>        
        </Link>

      </div>
    </div>

  )
}

export default Header
