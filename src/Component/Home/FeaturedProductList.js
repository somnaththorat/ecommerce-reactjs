import React from 'react';
import { NavLink } from 'react-router-dom';


const FeaturedProductList = (element) => {
  const {id, title, images, price, category} = element;
  return (
    <NavLink to={`/product/${id}`}>
      <div className="card">
        <figure>
          <img src={images[0]} alt={title} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">{Intl.NumberFormat('en-IN',{style:"currency", currency:'INR'}).format(price * 80)}/- </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default FeaturedProductList;