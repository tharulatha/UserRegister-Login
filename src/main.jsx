import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './App.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/',
          element: <Register />
        }
      ]
    }
  ])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
  