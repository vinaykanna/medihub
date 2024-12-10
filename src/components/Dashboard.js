import { useState } from 'react';
import { Container, Grid, Paper, Typography, Box, Card, CardContent } from '@mui/material';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats] = useState({
    appointments: 5,
    prescriptions: 12,
    reports: 3,
    notifications: 2
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.name}
      </Typography>
      
      <Grid container spacing={3}>
        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Appointments</Typography>
            <Typography variant="h4">{stats.appointments}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Prescriptions</Typography>
            <Typography variant="h4">{stats.prescriptions}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Reports</Typography>
            <Typography variant="h4">{stats.reports}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Notifications</Typography>
            <Typography variant="h4">{stats.notifications}</Typography>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography color="text.secondary">
                  No recent activity to display.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 