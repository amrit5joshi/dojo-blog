import React, { useState } from 'react';
import './App.css';
import Greet from './Component/Greet.js';
import Navbar from './Navbar';
import Home from './Home';
function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
     <Home/>
      </div>
      
     

    </div>
  );
}

export default App;
