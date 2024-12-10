import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Chat from '../components/Chat';

export const publicRoutes = [
  {
    path: '/',
    element: Home,
    label: 'Home'
  },
  {
    path: '/about',
    element: About,
    label: 'About'
  },
  {
    path: '/login',
    element: Login,
    label: 'Login'
  }
];

export const protectedRoutes = [
  {
    path: '/dashboard',
    element: Dashboard,
    label: 'Dashboard'
  },
  {
    path: '/chat',
    element: Chat,
    label: 'Chat'
  }
];

export const defaultRedirect = '/'; 