import { useState, useEffect } from 'react';
import { useApi } from '../hooks/useApi';
import { Card, CardContent, Typography, Button, CircularProgress, Alert } from '@mui/material';

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const { request, loading, error } = useApi();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await request({
        url: '/user/profile',
        method: 'GET'
      });
      setProfile(data);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  const updateProfile = async (updatedData) => {
    try {
      const data = await request({
        url: '/user/profile',
        method: 'PUT',
        data: updatedData
      });
      setProfile(data);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Card>
      <CardContent>
        {profile && (
          <>
            <Typography variant="h5">{profile.name}</Typography>
            <Typography color="textSecondary">{profile.email}</Typography>
            <Button 
              variant="contained" 
              onClick={() => updateProfile({ name: 'New Name' })}
            >
              Update Profile
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default UserProfile; 