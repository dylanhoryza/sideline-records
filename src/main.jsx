import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import RatesPage from './pages/RatesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/rates',
        element: <RatesPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
