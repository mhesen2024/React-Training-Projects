import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        if (!query) {
            return;
        }
        e.preventDefault()
        navigate(`/order/${query}`)
        setQuery('');
    }

  return (
    <form className="order-3 w-full sm:order-none sm:w-64" onSubmit={handleSubmit}>
      <input
        className="w-full rounded-full bg-amber-100 px-4 py-2 text-sm text-stone-800 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-white/70"
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}
