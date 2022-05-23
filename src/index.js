import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateExpensePage from './components/CreateExpensePage';
import EditExpensePage from './components/EditExpensePage';
import Navbar from './components/Navbar';
import ExpenseProvider from './store/ExpenseStore';
import ExpenseDashboard from './components/ExepenseDashboard';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <ExpenseProvider>
      <Navbar/>
      <Routes>      
        <Route path='/' element={<ExpenseDashboard/>}/>
        <Route path='/create' element={<CreateExpensePage/>}/>
        <Route path='/edit/:id' element={<EditExpensePage/>}/>
      </Routes>
    </ExpenseProvider>
  </BrowserRouter>    
);