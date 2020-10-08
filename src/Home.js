import React from 'react';
import Product from './Product';
import "./Home.css";
import {v4 as uuid} from 'uuid';
import products from "./db";


function Home() {
  const productList = products.map(product => (
      <Product 
          key={uuid()}
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating}
        />
  ))
  return (
    <div className="Home">
      <div className="Home-container">
        <img className="Home-containerImage" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Container banner" />
      </div>
      <div className="Home-row">
        {productList.slice(0,2)}
      </div>
      <div className="Home-row">
        {productList.slice(2,5)}
      </div>
    </div>
  )
}

export default Home
