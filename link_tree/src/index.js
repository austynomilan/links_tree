import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import Contact from './Pages/contact'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
      <Routes>
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
