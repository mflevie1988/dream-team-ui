// import { fireEvent, render, screen } from '@testing-library/react';

// import Login from './Login';
// import { Provider } from 'react-redux';

// describe('Login component', () => {
//   it('should render email and password fields', () => {
//     render(<Login />);
//     const emailInput = screen.getByLabelText('Enter your email');
//     const passwordInput = screen.getByLabelText('Enter your password');
//     expect(emailInput).toBeInTheDocument();
//     expect(passwordInput).toBeInTheDocument();
//   });

//   it('should allow the user to type into the email and password fields', () => {
//     render(<Login />);
//     const emailInput = screen.getByLabelText('Enter your email');
//     const passwordInput = screen.getByLabelText('Enter your password');
//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     expect(emailInput).toHaveValue('test@example.com');
//     expect(passwordInput).toHaveValue('password123');
//   });

//   it('should show and hide password when clicked', () => {
//     render(<Login />);
//     const passwordInput = screen.getByLabelText('Enter your password') as HTMLInputElement;
//     const toggleButton = screen.getByLabelText('toggle password') as HTMLInputElement;
//     fireEvent.click(toggleButton);
//     expect(passwordInput.type).toBe('text');
//     fireEvent.click(toggleButton);
//     expect(passwordInput.type).toBe('password');
//   });

//   it('should submit the form when "Sign In" button is clicked', () => {
//     const dispatch = jest.fn();
//     jest.mock('../../storeHooks', () => ({
//       useAppDispatch: () => dispatch,
//       useAppSelector: () => ''
//     }));
//     const navigate = jest.fn();
//     jest.mock('react-router-dom', () => ({
//       useNavigate: () => navigate
//     }));
//     render(<Login />);
//     const emailInput = screen.getByLabelText('Enter your email');
//     const passwordInput = screen.getByLabelText('Enter your password');
//     const signInButton = screen.getByRole('button', { name: /Sign In/ });
//     fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     fireEvent.click(signInButton);
//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'login/FETCH_USER_AUTHENTICATION',
//       payload: { email: 'test@example.com', password: 'password123' }
//     });
//     expect(signInButton).toBeDisabled();
//   });
// });

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Login from './Login';
import React from 'react';

describe('Login', () => {
  // it('renders email and password inputs', () => {
  //   render(<Login />);
  //   const emailInput = screen.getByLabelText('Enter your email');
  //   const passwordInput = screen.getByLabelText('Enter your password');
  //   expect(emailInput).toBeInTheDocument();
  //   expect(passwordInput).toBeInTheDocument();
  // });
  // it('handles input changes correctly', () => {
  //   render(<Login />);
  //   const emailInput = screen.getByLabelText('Enter your email');
  //   const passwordInput = screen.getByLabelText('Enter your password');
  //   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  //   fireEvent.change(passwordInput, { target: { value: 'password123' } });
  //   expect(emailInput).toHaveValue('test@example.com');
  //   expect(passwordInput).toHaveValue('password123');
  // });
  // it('displays error message on failed login', async () => {
  //   const mockDispatch = jest.fn();
  //   jest.mock('../../storeHooks', () => ({
  //     useAppDispatch: () => mockDispatch,
  //     useAppSelector: jest.fn()
  //   }));
  //   mockDispatch.mockReturnValueOnce(Promise.reject(new Error('Invalid email or password')));
  //   render(<Login />);
  //   const emailInput = screen.getByLabelText('Enter your email');
  //   const passwordInput = screen.getByLabelText('Enter your password');
  //   const signInButton = screen.getByRole('button', { name: 'Sign In' });
  //   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  //   fireEvent.change(passwordInput, { target: { value: 'password123' } });
  //   fireEvent.click(signInButton);
  //   await waitFor(() => {
  //     const errorMessage = screen.getByText('Invalid email or password');
  //     expect(errorMessage).toBeInTheDocument();
  //   });
  // });
});
