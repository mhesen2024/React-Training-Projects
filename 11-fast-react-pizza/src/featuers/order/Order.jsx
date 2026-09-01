// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant.js";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utlis/helpers.js";
import OrderItem from "./OrderItem.jsx";
import useTitle from "../../hooks/useTitle.js";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder.jsx";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { order } = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  useTitle(`Order #${id}`);
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);


  
  return (
    <div className="mx-auto max-w-2xl space-y-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-black text-stone-800">
          Order #{id} status
        </h2>

        <div className="flex gap-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Priority
            </span>
          )}
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {status} order
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-amber-100 px-5 py-4">
        <p className="font-bold text-amber-900">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-amber-800">
          Estimated delivery: {formatDate(estimatedDelivery)}
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-y border-stone-200">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={fetcher.data?.find((pizza) => pizza.id === item.pizzaId)?.ingredients}
          />
        ))}
      </ul>

      <div className="space-y-2 rounded-2xl bg-stone-100 px-5 py-4 text-sm">
        <p>
          Price pizza:{" "}
          <span className="font-semibold">{formatCurrency(orderPrice)}</span>
        </p>
        {priority && (
          <p>
            Price priority:{" "}
            <span className="font-semibold">
              {formatCurrency(priorityPrice)}
            </span>
          </p>
        )}
        <p className="pt-1 font-bold text-stone-800">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.id);
  return { order };
}
export default Order;
