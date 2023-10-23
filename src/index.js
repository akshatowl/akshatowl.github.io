import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Projects from './Component/Projects';
import './App.css'

import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
);
