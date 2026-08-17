import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const loan = useSelector((state) => state.account.loan);
  const purpose = useSelector((state) => state.account.loanPurpose);
  const loading = useSelector((state) => state.account.loading);

  const dispatch = useDispatch();
  function handleDeposit() {
    if (depositAmount <= 0) {
      return;
    }
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
  }

  function handleWithdrawal() {
    if (withdrawalAmount <= 0) {
      return;
    }
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (loanAmount <= 0) {
      return;
    }
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    if (loan === 0) {
      return;
    }
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
            <option value="ILS">ILS</option>
          </select>

          <button onClick={handleDeposit} disabled={loading}>
            Deposit {loading ? "..." : ""}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>Withdraw</button>
        </div>
        {loan === 0 ? (
          <div>
            <label>Request loan</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              placeholder="Loan amount"
            />
            <input
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
              placeholder="Loan purpose"
            />
            <button onClick={handleRequestLoan}>Request loan</button>
          </div>
        ) : (
          <div>
            <span>
              Pay back {loan} {purpose}{" "}
            </span>
            <button onClick={handlePayLoan}> Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
