import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Projects from './Component/Projects';
import './App.css'

import{ Route, Routes, Router, BrowserRouter}from "react-router-dom";

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
  <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
     
  );

