import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { publicRoutes, protectedRoutes } from '../routes';

function NavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'inherit' 
          }}
        >
          MediHub
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Public Routes */}
          {publicRoutes
            .filter(route => route.path !== '/login')
            .map(route => (
              <Button 
                key={route.path}
                color="inherit" 
                component={Link} 
                to={route.path}
              >
                {route.label}
              </Button>
            ))}
          
          {/* Protected Routes & Auth Buttons */}
          {isAuthenticated ? (
            <>
              {protectedRoutes.map(route => (
                <Button 
                  key={route.path}
                  color="inherit" 
                  component={Link} 
                  to={route.path}
                >
                  {route.label}
                </Button>
              ))}
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button 
              color="inherit" 
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar; 