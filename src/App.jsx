import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register/:role" element={<Register />} />
      <Route path="/login/:role" element={<Login />} />
    </Routes>
  );
}

export default App;
