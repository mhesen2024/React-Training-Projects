import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import useTitle from "../../hooks/useTitle";
import store from "../../store";
import { clearCart, getTotalPrice } from "../cart/cartSlice";
import { useState } from "react";
import { formatCurrency } from "../../utlis/helpers";
import { fetchAddress } from "../users/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  useTitle("Create Order");
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting';
  const cart = useSelector((state) => state.cart.cartItems);
  const cartPrice = useSelector(getTotalPrice);
  const totalPrice = cartPrice + (withPriority ? cartPrice * 0.2 : 0);
  const formErrors = useActionData();
  const dispatch = useDispatch();
  const { address, position, status, error: addressError } = useSelector(
    (state) => state.user,
  );
  const isLoadingAddress = status === "loading";

  if(cart.length === 0){return <EmptyCart/>}
  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Checkout</p>
      <h2 className="mt-2 text-3xl font-black text-stone-800">Ready to order? Let&apos;s go!</h2>

      {/* <Form method="POST" action="order/new"> */}
      <Form method="POST" className="mt-8 space-y-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid items-center gap-2 sm:grid-cols-[9rem_1fr]">
          <label className="font-semibold text-stone-700">First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div className="grid items-center gap-2 sm:grid-cols-[9rem_1fr]">
          <label className="font-semibold text-stone-700">Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
        </div>
        {formErrors?.phone && <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 sm:ml-36">{formErrors.phone}</div>}

        <div className="grid items-center gap-2 sm:grid-cols-[9rem_1fr]">
          <label className="font-semibold text-stone-700">Address</label>
          <div className="relative">
            <input
              className="input"
              type="text"
              name="address"
              defaultValue={address}
              disabled={isLoadingAddress}
              required
            />
            {!position.latitude && !position.longitude && (
              <span className="absolute right-1 top-1/2 -translate-y-1/2">
                <Button
                  type="small"
                  disabled={isLoadingAddress}
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  {isLoadingAddress ? "Getting position..." : "Get position"}
                </Button>
              </span>
            )}
          </div>
        </div>
        {addressError && (
          <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700 sm:ml-36">
            {addressError}
          </div>
        )}

        <div className="flex items-center gap-3 border-t border-stone-200 pt-5">
          <input
            className="h-5 w-5 accent-amber-400"
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium text-stone-700" htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name='cart' value={JSON.stringify(cart)}/>
          <input type="hidden" name="position" value={JSON.stringify(position)} />
          <Button disabled={isSubmiting || isLoadingAddress}>
            {isSubmiting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };
  
  const errors ={};
  if(!isValidPhone(order.phone))
    errors.phone = 'Phone number is not valid';

  if(Object.keys(errors).length>0)return errors;
  store.dispatch(clearCart());
  
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
