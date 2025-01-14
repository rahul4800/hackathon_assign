//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CurrentEvents from './components/CurrentEvents';
import Register from './components/RegisterPage';
import Login from './pages/LoginPage';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            
          </Route>
          <Route path="/currentEvent" element={<CurrentEvents />} />
          <Route path="/registerpage" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
