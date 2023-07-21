import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";

const Checkout = ({ totalPrice }) => {
  const dispatch = useDispatch();

  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, totalPrice));
  }

  return (
    <div>
      <StripeCheckout
        amount={totalPrice * 100}
        shippingAddress
        token={tokenHandler}
        currency="MKD"
        stripeKey="pk_test_51NUuKoIkjrTCwRJnW00ptrAIZPhfNzSdHazP90qEyRGQMWI1JWf6NkCiH8hTcWNGfHDFb1ZeeaRFXu8TyXJmKoBW00ulN0sW9l"
      >
        <button className="btn btn-danger">Check Out</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
