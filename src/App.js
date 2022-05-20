import React from 'react';
import Home from './components/Home';
import Admin from './components/admin/Admin'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/admin" element={<Admin />}/>
        </Routes>
    </Router>
  );
}

export default App;
