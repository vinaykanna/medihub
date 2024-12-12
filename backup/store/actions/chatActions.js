import api from '../../utils/axios';

export const sendMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: 'SEND_MESSAGE_REQUEST' });
    
    const { data } = await api.post('/chat/messages', { message });
    
    dispatch({
      type: 'SEND_MESSAGE_SUCCESS',
      payload: data
    });
  } catch (error) {
    dispatch({
      type: 'SEND_MESSAGE_FAILURE',
      payload: error.response?.data?.message || 'Failed to send message'
    });
  }
};

export const fetchMessages = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_MESSAGES_REQUEST' });
    
    const { data } = await api.get('/chat/messages');
    
    dispatch({
      type: 'FETCH_MESSAGES_SUCCESS',
      payload: data
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_MESSAGES_FAILURE',
      payload: error.response?.data?.message || 'Failed to fetch messages'
    });
  }
}; 