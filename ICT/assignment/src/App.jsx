import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './Components/Product'
import Item from './Components/Item'

const App = () => {
  return (
    <div>

        <Navbar/>
      
        <Routes>
          <Route path='/product' element={<Product/>}/>
          <Route path='/item' element={<Item/>}/>
        </Routes>

    </div>
  )
}

export default App
