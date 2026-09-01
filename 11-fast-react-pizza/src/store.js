// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./featuers/users/userSlice";
import cartReducer from "./featuers/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
