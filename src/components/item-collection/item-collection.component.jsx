import React from "react";
import "./item-collection.styles.scss";

const ItemCollection = ({ id, name, price, imageUrl }) => {
  return (
    <div className="item-collection">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ItemCollection;
