import { Link } from 'react-router-dom'
import SearchOrder from '../featuers/order/SearchOrder'
import UserName from '../featuers/users/UserName'

export default function Header() {
  return (
   <header className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-300 bg-amber-400 px-4 py-4 sm:px-6">
    <Link to="/" className="text-lg font-black uppercase tracking-[0.16em] text-stone-900 sm:text-xl">
      Fast React Pizza
    </Link>
    <SearchOrder />
    <UserName/>
    </header>
  )
}
