import Button from '../../ui/Button';

function EmptyCart() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-soft">
      <div className="text-5xl">🍕</div>
      <p className="mt-5 text-lg font-semibold text-stone-700">Your cart is still empty.</p>
      <p className="mt-1 text-stone-500">Start adding some delicious pizzas!</p>

      <div className="mt-7">
        <Button to="/menu">Browse menu</Button>
      </div>
    </div>
  );
}

export default EmptyCart;
