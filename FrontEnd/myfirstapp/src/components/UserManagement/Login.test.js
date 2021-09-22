import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store'
import { render } from '@testing-library/react';
import Login from './Login';

test('Contains log in form', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Login />, {wrapper: Wrapper});
    const signUpFormElement = getByText(/log in/i, {exact: false});
    expect(signUpFormElement).toBeInTheDocument();
  });

test('Contains username field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Login />, {wrapper: Wrapper});
    const usernameFieldElement = getByPlaceholderText(/email address/i, {exact: false});
    expect(usernameFieldElement).toBeInTheDocument();
  });

  test('Contains password field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Login />, {wrapper: Wrapper});
    const passwordFieldElement = getByPlaceholderText(/^password$/i, {exact: false});
    expect(passwordFieldElement).toBeInTheDocument();
  });