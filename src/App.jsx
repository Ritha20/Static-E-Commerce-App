import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        
      </div>
    </Router>
  );
}

export default App;