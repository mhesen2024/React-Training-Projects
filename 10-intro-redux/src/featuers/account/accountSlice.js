const intialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};


export default function accountReducer(state = intialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestloan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: action.payload.amount + state.balance,
      };
    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}





export function deposit(amount, currency) {
  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: amount,
    };
  }

  return async function (dispatch) {
    const response = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`
    );

    const data = await response.json();

    const convertedAmount = (amount * data.rates.USD).toFixed(2);

    dispatch({
      type: "account/deposit",
      payload: Number(convertedAmount),
    });
  };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return { type: "account/requestloan", payload: { amount, purpose } };
}

export function payLoan() {
  return { type: "account/payloan" };
}
