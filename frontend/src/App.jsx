import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/AuthLayout";
import Login from "./components/authentication/Login";
import LoginMaster from "./components/authentication/LoginMaster";
import LoginSeller from "./components/authentication/LoginSeller";
import MasterAuthLayout from "./pages/MasterAuthLayout";
import React from "react";
import SellerAuthLayout from "./pages/SellerAuthLayout";
import Signup from "./components/authentication/Signup";
import SignupSeller from "./components/authentication/SignupSeller";
import SignupMaster from "./components/authentication/SignupMaster";
import './index.css'
import SellerDashboardLayout from "./pages/SellerDashboardLayout";
import Dashboard from "./components/seller/Dashboard";
import Category from "./components/seller/Category";
import ProductPage from "./pages/ProductPage";
import Product from "./components/seller/Product";
import Order from "./components/seller/Order";
import Customer from "./components/seller/Customer";
import Earning from "./components/seller/Earning";
import WeeklyOverview from "./components/seller/WeeklyOverview";
import MonthlyOverview from "./components/seller/MonthlyOverview";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>
        <Route element={<SellerAuthLayout />}>
          <Route path="/loginSeller" element={<LoginSeller />} />
          <Route path="/registerSeller" element={<SignupSeller />} />
        </Route>
        <Route element={<MasterAuthLayout />}>
          <Route path="/loginMaster" element={<LoginMaster />} />
          <Route path="/registerMaster" element={<SignupMaster />} />
        </Route>
        <Route element={<SellerDashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/weekly-overview" element={<WeeklyOverview />} />
          <Route path="/monthly-overview" element={<MonthlyOverview />} />
        </Route>
     
        <Route path="products" element={<ProductPage/>}/>

  
        
      </Routes>
    </Router>
  );
};

export default App;