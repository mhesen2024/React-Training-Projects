import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./featuers/customer/customerSlice";
import accountReducer from "./featuers/account/accountSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
  },
});

export { store };
