import Header from './Header'
import CartOverview from '../featuers/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';

export default function Applayout() {
  const navigation  = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {isLoading && <Loader />}
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  )
}
