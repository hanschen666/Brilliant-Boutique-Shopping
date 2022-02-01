import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import logo from "../../assets/Logo.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51KO3PrInD2MUrkMq1hy5hGKLkKpE8VbRH9O7hV3nMNvSuxHvpQOraRmnJREpauq6pm27l6GA9NOroZsPEXwrTRbL00aM6ed00N";

  const onToken = (token) => {
    console.log(token);
    alert("Payement Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now 💳"
      name="Gold Shopping Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
