import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import store from './store/store';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import { publicRoutes, protectedRoutes, defaultRedirect } from './routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* Public Routes */}
            {publicRoutes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}

            {/* Protected Routes */}
            {protectedRoutes.map(({ path, element: Element }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute>
                    <Element />
                  </ProtectedRoute>
                }
              />
            ))}

            {/* Default redirect */}  
            <Route path="*" element={<Navigate to={defaultRedirect} replace />} />
          </Routes>
        </BrowserRouter> 
      </ThemeProvider>
    </Provider>
  );
}

export default App;
