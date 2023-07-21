import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartAction";
import Checkout from "../Components/Checkout";

const CartPage = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((x, item) => x + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>Cart is empty.</h2>
    );
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-5">
          <h2
            style={{ fontSize: "40px", textAlign: "center" }}
            className="mb-5"
          >
            Cart
          </h2>

          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-start m-1 w-100">
                  <h3>
                    {item.name}
                    <span
                      style={{
                        textTransform: "capitalize",
                        marginLeft: "10px",
                      }}
                    >
                      [{item.variant}]
                    </span>
                  </h3>

                  <p>
                    Price: {item.quantity} * {item.prices[0][item.variant]} ={" "}
                    {item.price}
                  </p>
                  <div className="quantity-container">
                    <svg
                      style={{ cursor: "pointer" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="red"
                      className="bi bi-dash-circle-fill"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity - 1, item.variant)
                        );
                      }}
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                    </svg>
                    <span className="quantity"> {item.quantity} </span>
                    <svg
                      style={{ cursor: "pointer" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="green"
                      className="bi bi-plus-circle-fill"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        dispatch(
                          addToCart(item, item.quantity + 1, item.variant)
                        );
                      }}
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                  </div>
                </div>
                <div className="m-1 w-100">
                  <img src={item.image} alt={item.name} width={130} />
                </div>
                <div className="m-1 w-100">
                  <svg
                    style={{ cursor: "pointer" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="red"
                    className="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="col-md-4 text-end">
          <h2 style={{ fontSize: "25px" }}>Total Price: {totalPrice} MKD</h2>
          <Checkout totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
