import React, { useState } from 'react'
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
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search order" value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}
