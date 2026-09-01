import { useSelector } from "react-redux";

export default function UserName() {

  const name = useSelector((state) => state.user.userName);

  if (!name) return null;
  return (
    <p className="hidden text-sm font-semibold uppercase tracking-wider text-stone-800 sm:block">
      {name}
    </p>
  );
}
