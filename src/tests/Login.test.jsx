/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../src/pages/Login';

// Mock Auth context and useNavigate
jest.mock('../../src/contexts/AuthContext', () => ({
  useAuth: jest.fn(() => ({
    login: jest.fn(),
  })),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Login component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('should call login function with correct credentials on submit', async () => {
    const mockLogin = jest.fn();
    jest.mocked('../../src/contexts/AuthContext').mockReturnValue({
      login: mockLogin,
    });

    render(<Login />);

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Log in' });

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');
    userEvent.click(submitButton);

    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async operations

    expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
  });

});
