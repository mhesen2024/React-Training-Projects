import { useSelector } from "react-redux";
import CreateUser from "../featuers/users/CreateUser";
import Button from "./Button";
import useTitle from "../hooks/useTitle";

function Home() {
  useTitle("Home");
  const name = useSelector((state) => state.user.userName);
  return (
    <div className="flex min-h-[60vh] items-center justify-center text-center">
      <div className="max-w-2xl">
        <span className="mb-5 inline-block rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
          Hot, fresh & fast
        </span>
        <h1 className="text-4xl font-black leading-tight text-stone-800 sm:text-5xl md:text-6xl">
          The best pizza.
          <span className="mt-2 block text-amber-500">Straight out of the oven.</span>
      </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-stone-500 sm:text-lg">
          Authentic ingredients, bold flavors, and speedy delivery—straight to you.
        </p>
        {!name && (
          <div className="mt-8">
          <CreateUser />
        </div>
        )}
        {name && (
          <div className="mt-8">
            <Button to="/menu">Continue ordering, {name}</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
