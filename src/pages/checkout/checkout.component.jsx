import React from "react";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        <br />
        5555 5555 5555 4444 - Exp 01/26 - CVV: 234
      </div>
      <StripeCheckoutButton price={Total}></StripeCheckoutButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Total: selectCartTotal(state),
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CheckoutPage);
