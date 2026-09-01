import { formatCurrency } from "../../utlis/helpers";

function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="rounded-xl px-3 py-4 transition-colors hover:bg-stone-50 sm:px-4">
      <div className="flex items-start justify-between gap-4">
        <p className="font-medium text-stone-700">
          <span className="mr-1 font-bold text-amber-700">
            {quantity}&times;
          </span>
          {name}
        </p>
        <p className="shrink-0 font-bold text-stone-800">
          {formatCurrency(totalPrice)}
        </p>
      </div>

      {isLoadingIngredients ? (
        <p className="mt-2 animate-pulse text-sm italic text-stone-400">
          Loading ingredients...
        </p>
      ) : (
        ingredients && (
          <p className="mt-2 text-sm italic leading-5 text-stone-500">
            {ingredients.join(", ")}
          </p>
        )
      )}
    </li>
  );
}

export default OrderItem;
