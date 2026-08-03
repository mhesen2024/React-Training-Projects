import { combineReducers, createStore } from "redux";



const intialStateCoustmer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
  status: "",
};



function customerReducer(state = intialStateCoustmer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 1000 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/requestloan", payload: { amount: 1000, purpose: "buy a car" } });



store.dispatch(createCustomer("John Doe", "1234567890"));
console.log(store.getState());
store.dispatch(deposite(700));
console.log(store.getState());
