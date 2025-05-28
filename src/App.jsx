import { useEffect, useState } from 'react'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from './components/NotFound404'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {


  
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer message="Catálogo de Productos"  /> }/>
          <Route path='/category/:categoryId' element={<ItemListContainer message="Category: "  /> }/>
          <Route path='/product/:id' element={<ItemDetailsContainer />}/>
          <Route path='*' element={<NotFound404 />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element = {<Checkout/>}/>
        </Routes>
        <ScrollToTopButton />
      </CartProvider>
    </BrowserRouter>

    
    
  )
}

export default App
