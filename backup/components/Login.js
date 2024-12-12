import useAuth from '../hooks/useAuth';
import useForm from '../hooks/useForm';
import useApi from '../hooks/useApi';
import { Box, TextField, Button, Paper, Typography, Container, CircularProgress } from '@mui/material';

function Login() {
  const { setUser } = useAuth();
  const { values, errors, handleChange, setErrors } = useForm({
    username: '',
    password: ''
  });
  const { request, loading } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await request({
        url: '/auth/login',
        method: 'POST',
        data: values
      });
      
      localStorage.setItem('token', data.token);
      setUser(data.user);
    } catch (error) {
      setErrors({ form: error.response?.data?.message || 'Login failed' });
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        {errors.form && (
          <Typography color="error" sx={{ mb: 2 }}>
            {errors.form}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
            disabled={loading}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            disabled={loading}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login; 