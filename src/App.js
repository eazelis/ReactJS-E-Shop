import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Admin from './components/admin/AdminPage'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/header" element={<Header />}/>
          <Route exact path="/admin" element={<Admin />}/>
        </Routes>
    </Router>
  );
}

export default App;
