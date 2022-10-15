import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

import "@fontsource/cormorant";

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";



function App() {

  return (
     <BrowserRouter>
      <Routes>
      {/* if user is already logged in, go to dashboard */}
      <Route exact path="/" element={<Navigate to="/home"/>}>
      </Route>
      <Route exact path="/home" element={<Home />}>
      </Route>
      <Route exact path="/dashboard" element={<Dashboard />}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;