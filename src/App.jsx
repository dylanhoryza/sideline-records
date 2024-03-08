import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <div className='app-wrapper'>
    <div className='app-container'>
      <Header />
      <Outlet />
    </div>
   
  </div>
  )
}

export default App
