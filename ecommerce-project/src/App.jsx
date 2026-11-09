import  { Routes, Route } from 'react-router';
import { HomePage } from './assets/pages/HomePage'
import { CheckoutPage } from './assets/pages/CheckoutPage';
import './App.css'

function App() {

  return (
    <Routes>
          <Route index element={<HomePage />} />
            <Route path="checkout" element={<CheckoutPage/>} />
    </Routes>
    
  )
}

export default App
