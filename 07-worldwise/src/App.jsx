import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Login from './pages/Login'
import Pricing from './pages/Pricing'
import AppLayout from './pages/AppLayout'
import PageNotFound from './pages/PageNotFound'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/prici" element={<Pricing/>} />
        <Route path="/app" element={<AppLayout/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
