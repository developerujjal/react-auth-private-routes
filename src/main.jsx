import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Pages/Home';
import LogIn from './components/Pages/LogIn';
import SignUp from './components/Pages/SignUp';
import AuthContext from './components/AuthContext/AuthContext';
import Display from './components/Pages/Display';
import History from './components/Pages/History';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Profile from './components/Pages/Profile';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/display',
        element: <Display />
      }, {
        path: '/history',
        element: <PrivateRoutes><History /></PrivateRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile /></PrivateRoutes>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>
)
