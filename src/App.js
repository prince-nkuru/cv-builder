import React from 'react';
import CVForm from './components/CVForm';
import './App.css';

import Header from './components/heading/Header' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/heading/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CVForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
