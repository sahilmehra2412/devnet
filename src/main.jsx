import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Landing from './components/Landing.jsx';
import Feed from './components/Feed.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children : [
      {
        path: '/',
        element: <Landing/>
      },
      {
        path:'/signup',
        element :<Signup/>
      },
      {
        path:'/login',
        element : <Login/>
      },
      {
        path:'/feed',
        element:<Feed/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
