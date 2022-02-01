import React from "react";
import { connect } from "react-redux";
import "./item-collection.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { AddItem } from "../../redux/cart/cart.action";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const ItemCollection = ({ item, AddItem, currentUser }) => {
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
      <CustomButton
        onClick={() => {
          currentUser !== null
            ? AddItem(item)
            : alert("Please log into your account!");
        }}
        inverted
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCollection);
