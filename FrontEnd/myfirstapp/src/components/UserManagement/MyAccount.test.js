import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store'
import { render } from '@testing-library/react';
import Account from './MyAccount';

test('Contains full name', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Account />, {wrapper: Wrapper});
    const nameElement = getByText(/Full Name/i, {exact: false}); 
    expect(nameElement).toBeInTheDocument();
  });

  test('Contains email', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Account />, {wrapper: Wrapper});
    const emailElement = getByText(/Email Address/i, {exact: false}); 
    expect(emailElement).toBeInTheDocument();
  });

  test('Contains Password', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Account />, {wrapper: Wrapper});
    const passwordElement = getByText(/Password/i, {exact: false}); 
    expect(passwordElement).toBeInTheDocument();
  });

  test('Contains Account Type', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Account />, {wrapper: Wrapper});
    const accountElement = getByText(/Account Type/i, {exact: false}); 
    expect(accountElement).toBeInTheDocument();
  });

