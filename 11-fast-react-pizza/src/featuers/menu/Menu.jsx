import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import useTitle from "../../hooks/useTitle";
export default function Menu() {
  useTitle("Menu");
  const menu = useLoaderData();

  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Made to order</p>
        <h1 className="mt-2 text-3xl font-black text-stone-800 sm:text-4xl">Our pizza menu</h1>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </section>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
