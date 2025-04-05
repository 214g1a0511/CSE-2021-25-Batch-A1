import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../components/LandingPage'
import Register from '../components/Register'
import Login from '../components/Login'
import VehicleForm from '../components/VehicleForm'
import VehicleType from '../components/VehicleType'
import PaymentForm from '../components/PaymentForm'
import PaymentSuccessPage from '../components/PaymentSuccessPage'
import Dashboard from '../components/BikeDashboard'
import BikeDashboard from '../components/BikeDashboard'
import CarDashboard from '../components/CarDashboard'
import UserPage from '../components/UserPage'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/vehicleForm" element={<VehicleForm/>}></Route>
            <Route path="/vehicleType" element={<VehicleType/>}></Route>
            <Route path="/paymentForm" element={<PaymentForm/>}></Route>
            <Route path="/paymentsuccess" element={<PaymentSuccessPage/>}></Route>
            <Route path="/bikedashboard" element={<BikeDashboard/>}></Route>
            <Route path="/cardashboard" element={<CarDashboard/>}></Route>
            <Route path="/userpage" element={<UserPage/>}></Route>




        </Routes>
    </div>
  )
}

export default AllRoutes