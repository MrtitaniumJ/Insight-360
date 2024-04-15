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
import Dashboard from "./components/authentication/seller/Dashboard";
import Category from "./components/authentication/seller/Category";
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
          <Route path="/category" element={<Category />} />
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
