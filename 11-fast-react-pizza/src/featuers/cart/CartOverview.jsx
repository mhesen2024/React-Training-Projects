import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utlis/helpers";
import { getTotalPrice, getTotalQuntity } from "./cartSlice";

function CartOverview() {
const totalPrice = useSelector(getTotalPrice);
const totalQuantity = useSelector(getTotalQuntity);
  return (
    <div className="flex items-center justify-between gap-4 bg-stone-900 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6">
      <p className="flex gap-5 font-semibold tracking-wide">
        <span>{totalQuantity} total pizzas</span>
        <span>€{formatCurrency(totalPrice)}</span>
      </p>
      <Link className="font-bold tracking-wide text-amber-400 transition hover:text-amber-300" to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
