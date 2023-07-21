import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllFoodReducer,
  addFoodReducer,
  getFoodByIdReducer,
  editFoodReducer,
} from "./reducers/foodReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  loginUserReducer,
  registerUserReducer,
  getAllUsersReducer,
} from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
} from "./reducers/orderReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const finalReducer = combineReducers({
  getAllFoodReducer: getAllFoodReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addFoodReducer: addFoodReducer,
  getFoodByIdReducer: getFoodByIdReducer,
  editFoodReducer: editFoodReducer,
  getAllUsersReducer: getAllUsersReducer,
  getAllOrdersReducer: getAllOrdersReducer,
});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
