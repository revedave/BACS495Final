import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Navbar/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <><Router>
      <Header />
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router><Footer /></>
  );
}

export default App;
