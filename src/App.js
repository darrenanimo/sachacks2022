import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Resources from './pages/Resources';
import CalendarView from './pages/Calendar';

import "@fontsource/cormorant";

import {HashRouter, Routes, Route, Navigate} from "react-router-dom";



function App() {

  return (
     <HashRouter>
      <Routes>
      {/* if user is already logged in, go to dashboard */}
      <Route exact path="/" element={<Navigate to="/home"/>}>
      </Route>
      <Route exact path="/home" element={<Home />}>
      </Route>
      <Route exact path="/dashboard" element={<Dashboard />}>
      </Route>
      <Route exact path="/resources" element={<Resources />}>
      </Route>
      <Route exact path="/calendar" element={<CalendarView />}>
      </Route>
    </Routes>
    </HashRouter>
  );
}

export default App;