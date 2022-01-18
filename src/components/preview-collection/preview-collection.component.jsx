import React from "react";
import "./preview-collection.styles.scss";
import ItemCollection from "../item-collection/item-collection.component.jsx";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items-preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ItemCollection key={item.id} item={item}></ItemCollection>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
