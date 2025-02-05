import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Collection from './pages/collection/Collection'
import ProductDetails from './pages/productsDetails/ProductDetails'
import Login from './pages/login/Login'
import Return from './pages/policy/Return'
import RefundPolicy from './pages/policy/RefundPolicy'
import ShippingPolicy from './pages/policy/ShippingPolicy'
import TermsAndConditions from './pages/policy/TermsAndConditions'
import PrivacyPolicy from './pages/policy/PrivacyPolicy'
import Aboutus from './pages/about/Aboutus'
import ContactUs from './pages/contactus/Contactus'
import './App.css'
import OrderDetails from './pages/productsDetails/OrderDetails'
import { PaymentPage } from './pages/productsDetails/Payment'
import { OrderSuccess } from './pages/productsDetails/OrderSuccess'

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/details/:id' element={<ProductDetails/>}/>
          <Route path='/return-policy' element={<Return/>}/>
          <Route path='/refund-policy' element={<RefundPolicy/>}/>
          <Route path='/shipping-policy' element={<ShippingPolicy/>}/>
          <Route path='/terms-conditions' element={<TermsAndConditions/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/about-us' element={<Aboutus/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
          <Route path='/order-details/:id' element={<OrderDetails/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/order-success' element={<OrderSuccess/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

