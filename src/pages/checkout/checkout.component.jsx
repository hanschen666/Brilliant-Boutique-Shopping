import React from "react";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ Total, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="text">Product</span>
        </div>
        <div className="header-block">
          <span className="text">Description</span>
        </div>
        <div className="header-block">
          <span className="text">Quantity</span>
        </div>
        <div className="header-block">
          <span className="text">Price</span>
        </div>
        <div className="header-block">
          <span className="text">Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
      ))}

      <div className="total">
        <span>TOTAL: ${Total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Total: selectCartTotal(state),
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CheckoutPage);
