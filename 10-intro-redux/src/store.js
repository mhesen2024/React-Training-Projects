import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import accountReducer from "./featuers/account/accountSlice";
import customerReducer from "./featuers/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);