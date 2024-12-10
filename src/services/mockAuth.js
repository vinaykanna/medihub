// Mock user data
export const MOCK_USER = {
  id: 1,
  username: 'testuser',
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'user'
};

// Mock credentials
export const VALID_CREDENTIALS = {
  username: 'testuser',
  password: 'password123'
};

// Mock token
export const MOCK_TOKEN = 'mock-jwt-token-123456789';

// Mock authentication service
export const mockAuthService = {
  login: (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.username === VALID_CREDENTIALS.username &&
          credentials.password === VALID_CREDENTIALS.password
        ) {
          resolve({
            user: MOCK_USER,
            token: MOCK_TOKEN,
            message: 'Login successful'
          });
        } else {
          reject({
            message: 'Invalid credentials'
          });
        }
      }, 1000); // Simulate network delay
    });
  },

  getCurrentUser: () => {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('token');
      setTimeout(() => {
        if (token === MOCK_TOKEN) {
          resolve(MOCK_USER);
        } else {
          reject({
            message: 'Invalid token'
          });
        }
      }, 500);
    });
  }
}; 