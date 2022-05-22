import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateExpensePage from './components/CreateExpensePage';
import EditExpensePage from './components/EditExpensePage';
import Navbar from './components/Navbar';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Navbar/>
    <Routes>      
      <Route path='/' element={<App/>}/>
      <Route path='/create' element={<CreateExpensePage/>}/>
      <Route path='/edit' element={<EditExpensePage/>}/>
    </Routes>
  </BrowserRouter>    
);