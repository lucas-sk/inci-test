import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/auth/login'
import { Home } from './pages/home'
import { Hub } from './pages/hub'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/hub',
    element: <Hub />,
  },
])
