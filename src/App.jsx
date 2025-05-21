import { useEffect, useState } from 'react'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from './components/NotFound404'
import { CartProvider } from './context/CartContext'
import { getItems } from './firebase'

function App() {

  useEffect(()=>{
    getItems();
  },[]);
  
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer message="Catálogo de Productos"  /> }/>
          <Route path='/category/:categoryId' element={<ItemListContainer message="Category: "  /> }/>
          <Route path='/product/:id' element={<ItemDetailsContainer />}/>
          <Route path='*' element={<NotFound404 />}/>
        </Routes>
        <ScrollToTopButton />
      </CartProvider>
    </BrowserRouter>

    
    
  )
}

export default App
