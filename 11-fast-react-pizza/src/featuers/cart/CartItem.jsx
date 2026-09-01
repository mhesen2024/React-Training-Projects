import { formatCurrency } from "../../utlis/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentyQuntity,
  increaseItemQuantity,
  removeItem,
} from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentyQuntity(pizzaId));
  const dispatch = useDispatch();
  return (
    <li className="flex flex-wrap items-center justify-between gap-4 py-4">
      <p className="font-medium text-stone-700">
        {quantity}&times; {name}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <p className="font-bold text-stone-800">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-2">
          <Button
            type="round"
         disabled={currentQuantity <= 0}
            onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
          >
            -
          </Button>
          <span className="min-w-6 text-center text-sm font-bold text-stone-800">
            {quantity}
          </span>
          <Button
            type="round"
            disabled={quantity === 10}
            onClick={() => dispatch(increaseItemQuantity(pizzaId))}
          >
            +
          </Button>
        </div>
        <Button type="round" onClick={() => dispatch(removeItem(pizzaId))}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
