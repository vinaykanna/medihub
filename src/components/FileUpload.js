import { useApi } from '../hooks/useApi';
import { Button, LinearProgress, Box, Typography, Alert } from '@mui/material';

function FileUpload() {
  const { request, loading, error } = useApi();

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const data = await request({
        url: '/upload',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully:', data.fileUrl);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <Box>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="file-upload"
        onChange={handleFileUpload}
        disabled={loading}
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          component="span"
          disabled={loading}
        >
          Upload File
        </Button>
      </label>
      
      {loading && (
        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress />
        </Box>
      )}
      
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
}

export default FileUpload; 