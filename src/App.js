import React from 'react';
import './App.css';
import Greet from './Component/Greet.js';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      Ma ta amrit ho hai
      </div>
      
      <Greet />
    </div>
  );
}

export default App;
