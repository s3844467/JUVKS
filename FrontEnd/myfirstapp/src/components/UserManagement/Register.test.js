import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store'
import { render } from '@testing-library/react';
import Register from './Register';

test('Contains sign up form', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Register />, {wrapper: Wrapper});
    const signUpFormElement = getByText(/sign up/i, {exact: false});
    expect(signUpFormElement).toBeInTheDocument();
  });

test('Contains username field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Register />, {wrapper: Wrapper});
    const usernameFieldElement = getByPlaceholderText(/username/i, {exact: false});
    expect(usernameFieldElement).toBeInTheDocument();
  });

  test('Contains full name field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Register />, {wrapper: Wrapper});
    const fullnameFieldElement = getByPlaceholderText(/full name/i, {exact: false});
    expect(fullnameFieldElement).toBeInTheDocument();
  });

  test('Contains password field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Register />, {wrapper: Wrapper});
    const passwordFieldElement = getByPlaceholderText(/^password$/i, {exact: false});
    expect(passwordFieldElement).toBeInTheDocument();
  });