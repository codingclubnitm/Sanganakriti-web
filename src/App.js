
import React, { useState } from "react";
import Events from "./Events"
import Homepage from 'pages/Homepage';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Events/>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          
       </Routes>

    </>
  )
  
}


export default App;