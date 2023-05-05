import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]

export default routes
