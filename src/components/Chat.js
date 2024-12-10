import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button, Paper, Typography, Container, Alert } from '@mui/material';
import { sendMessage, fetchMessages } from '../store/actions/chatActions';
import NavBar from './NavBar';

function Chat() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { messages, loading, error } = useSelector(state => state.chat);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(sendMessage(input));
      setInput('');
    }
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Paper elevation={3} sx={{ p: 2, height: 'calc(80vh - 64px)', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flexGrow: 1, overflow: 'auto', mb: 2 }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  backgroundColor: message.isUser ? '#e3f2fd' : '#f5f5f5',
                  borderRadius: 2,
                }}
              >
                <Typography>{message.content}</Typography>
              </Box>
            ))}
          </Box>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Chat; 