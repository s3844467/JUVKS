import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store'
import { render } from '@testing-library/react';
import Header from './Header';

test('Contains bookaroo logo', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Header />, {wrapper: Wrapper});
    const logoElement = getByText(/bookeroo/i, {exact: false});
    expect(logoElement).toBeInTheDocument();
  });
  
test('Contains register button', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Header />, {wrapper: Wrapper});
    const registerElement = getByText(/register/i, {exact: false});
    expect(registerElement).toBeInTheDocument();
});

test('Contains login button', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Header />, {wrapper: Wrapper});
    const registerElement = getByText(/login/i, {exact: false});
    expect(registerElement).toBeInTheDocument();
});