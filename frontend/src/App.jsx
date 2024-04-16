import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './perspectives/seller/components/dashboard';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
