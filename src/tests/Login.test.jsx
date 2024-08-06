/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

// Mock Auth context and useNavigate
jest.mock('../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../assets/crt.jpeg', () => 'mocked-image');
jest.mock('../assets/logos/smallLogo.svg', () => 'mocked-image');
jest.mock('../assets/logos/Google.png', () => 'mocked-image');

describe('Login component', () => {
  let mockLogin;
  let mockLoginWithGoogle;
  let mockNavigate;

  beforeEach(() => {
    mockLogin = jest.fn();
    mockLoginWithGoogle = jest.fn();
    mockNavigate = jest.fn();
    
    const useAuthMock = jest.requireMock('../contexts/AuthContext').useAuth;
    useAuthMock.mockReturnValue({
      login: mockLogin,
      loginWithGoogle: mockLoginWithGoogle,
    });
    
    const useNavigateMock = jest.requireMock('react-router-dom').useNavigate;
    useNavigateMock.mockReturnValue(mockNavigate);
    
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('should call loginWithGoogle function on Google button click', async () => {
    render(<Login setLoginSuccess={jest.fn()} />);

    const googleButton = screen.getByRole('button', { name: /Log in with Google/i });
    userEvent.click(googleButton);

    await waitFor(() => {
      expect(mockLoginWithGoogle).toHaveBeenCalled();
    });
  });
});