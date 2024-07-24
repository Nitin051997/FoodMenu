import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Home';
import FoodMenu from '../Menu';
import ContactPage from '../Contact';
import PageNotFound from '../PageNotFound';
import PlaceOrder from '../Custom/PlaceOrder/index.jsx';
import MyOrderLists from '../Order/index.jsx';

const Lander = () => {

  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/FoodMenu' element={<HomePage />} />
        <Route path='/menu' element={<FoodMenu />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/orderlist' element={<MyOrderLists />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}

export default Lander