import CreateCustomer from "./featuers/customer/CreateCustomer";
import Customer from "./featuers/customer/Customer";
import AccountOperations from "./featuers/account/AccountOperations";
import BalanceDisplay from "./featuers/account/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
