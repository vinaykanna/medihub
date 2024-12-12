import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About MediHub
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          Providing World-Class Healthcare Services
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography color="text.secondary">
                To provide accessible, high-quality healthcare services to everyone through innovative technology.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography color="text.secondary">
                To become the leading healthcare platform that connects patients with the best healthcare providers.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>
              <Typography color="text.secondary">
                Excellence, Compassion, Innovation, and Patient-First approach in everything we do.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 