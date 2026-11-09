import  { Routes, Route } from 'react-router';
import { HomePage } from './assets/pages/HomePage'
import { CheckoutPage } from './assets/pages/CheckoutPage';
import { OrdersPage } from './assets/pages/OrdersPage';

import './App.css'

function App() {

  return (
    <Routes>
          <Route index element={<HomePage />} />
            <Route path="checkout" element={<CheckoutPage/>} />
            <Route path="orders" element={< OrdersPage />} />
    </Routes>
    
  )
}

export default App
