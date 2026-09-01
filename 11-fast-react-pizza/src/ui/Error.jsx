import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './Button';
import useTitle from '../hooks/useTitle';

function NotFound() {
  useTitle('Error');
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="mx-auto mt-16 max-w-xl rounded-3xl border border-red-100 bg-white p-8 text-center shadow-soft">
      <div className="mb-4 text-5xl">😢</div>
      <h1 className="text-2xl font-bold text-stone-800">Something went wrong</h1>
      <p className="mt-3 text-stone-500">{error?.message || "We couldn't find that page."}</p>
      <div className="mt-7">
        <Button onClick={() => navigate(-1)}>&larr; Go back</Button>
      </div>
    </div>
  );
}

export default NotFound;
