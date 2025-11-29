import React from "react";
import { Link } from "react-router-dom";

const Productcard = ({ id, img, productname, disc, price, flag }) => {
  return (
    <main className="productcardmain w-full h-screen m-12">
      <div className="uppercard">
        <p>{flag}</p>
        <img src={img} alt={productname} />
        <div className="protitle">
          <h2>{productname}</h2>
        </div>
        <div className="prodiscrip">
          <p>{disc}</p>
        </div>
      </div>
      <div className="lowercard">
        <div className="proprice">
          <span>{price}</span>
        </div>
        <Link to={`/productpage/${id}`}>
          <button className="probutton">View More</button>
        </Link>
      </div>
    </main>
  );
};


export default Productcard;
