const initialState = {
  messages: [],
  loading: false,
  error: null
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES_REQUEST':
    case 'SEND_MESSAGE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case 'FETCH_MESSAGES_SUCCESS':
      return {
        ...state,
        loading: false,
        messages: action.payload,
        error: null
      };
    
    case 'SEND_MESSAGE_SUCCESS':
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
        error: null
      };
    
    case 'FETCH_MESSAGES_FAILURE':
    case 'SEND_MESSAGE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      
    default:
      return state;
  }
};

export default chatReducer; 