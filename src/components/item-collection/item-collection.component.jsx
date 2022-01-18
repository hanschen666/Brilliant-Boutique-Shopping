import React from "react";
import { connect } from "react-redux";
import "./item-collection.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { AddItem } from "../../redux/cart/cart.action";

const ItemCollection = ({ item, AddItem }) => {
  const { name, price, imageUrl } = item;
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
      <CustomButton onClick={() => AddItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});
export default connect(null, mapDispatchToProps)(ItemCollection);
