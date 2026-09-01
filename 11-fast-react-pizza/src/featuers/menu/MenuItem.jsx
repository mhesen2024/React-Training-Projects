import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utlis/helpers";
import { addItem, decreaseItemQuantity, getCurrentyQuntity, increaseItemQuantity, removeItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl,id } = pizza;
    const ItemQuntity = useSelector(getCurrentyQuntity(id));

  const dispatch = useDispatch();
  const handleAddItem =()=>{
    const newItem = {
      pizzaId:id,
      quantity: 1,
      unitPrice: unitPrice,
      name: name,
      imageUrl,
    }
    dispatch(addItem(newItem));
  }

  const handleDecrement =()=>{
    if(ItemQuntity > 1){
      dispatch(decreaseItemQuantity(id));
    }
    else{
      dispatch(removeItem(id));
    }
  }
  const handelincrement =()=>{
    dispatch(increaseItemQuantity(id));
  }

  return (
    <li className="group flex overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg">
      <div className="relative w-28 shrink-0 overflow-hidden sm:w-40">
        <img
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${soldOut ? "grayscale opacity-60" : ""}`}
          src={imageUrl}
          alt={name}
        />
        {soldOut && (
          <span className="absolute left-2 top-2 rounded-full bg-stone-900/75 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Sold out
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2">
          <h2 className="truncate text-base font-bold text-stone-800 sm:text-lg">
            {name}
          </h2>
          <p className="mt-1 line-clamp-2 text-xs italic leading-5 text-stone-500 sm:text-sm">
            {ingredients.join(', ')}
          </p>
        </div>

        <div className="mt-auto pt-4">
          {!soldOut && !ItemQuntity ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-base font-bold text-amber-700">
                {formatCurrency(unitPrice)}
              </p>
              <Button type="round" onClick={handleAddItem}>Add to cart</Button>
            </div>
          ) : soldOut ? (
            <p className="text-sm font-semibold text-stone-400">
              Currently unavailable
            </p>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Button type="round" onClick={handleDecrement}>-</Button>
                <span className="min-w-6 text-center text-sm font-bold text-stone-800">
                  {ItemQuntity}
                </span>
                <Button type="round" disabled={ItemQuntity === 10} onClick={handelincrement}>+</Button>
              </div>
              <Button type="round" onClick={() => dispatch(removeItem(id))}>Delete</Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
