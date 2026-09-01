import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import useTitle from "../../hooks/useTitle";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

export default function Cart() {
  useTitle("Cart");
  const name = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="mx-auto max-w-2xl">
      <Link className="text-link" to="/menu">
        &larr; Back to menu
      </Link>

      <h2 className="mt-8 text-3xl font-black text-stone-800">
        Your cart, {name}
      </h2>

      <ul className="my-7 divide-y divide-stone-200 border-y border-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex flex-wrap gap-3">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
