export const addToCart = (food, quantity, variant) => (dispatch, getState) => {
  let cartItem = {
    _id: food._id,
    name: food.name,
    image: food.image,
    variant: variant,
    quantity: Number(quantity),
    prices: food.prices,
    price: food.prices[0][variant] * quantity,
  };

  if (cartItem.quantity > 10) {
    alert("You cannot add more than 10 from same product.");
  } else {
    if (cartItem.quantity <= 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: food });
    } else dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (food) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: food });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
