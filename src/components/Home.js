import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to MediHub
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your trusted healthcare platform for online and clinic consultations
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/login')}
          >
            Get Started
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            onClick={() => navigate('/about')}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 