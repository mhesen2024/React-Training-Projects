import React from 'react'
import Header from './Header'
import CartOverview from '../featuers/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';

export default function Applayout() {
  const navigation  = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className='app-layout'>
        <Header />
        {isLoading && <Loader/>}
        <main>
            <h1>content</h1>
            <Outlet />
        </main>

        <CartOverview/>
    </div>
  )
}
