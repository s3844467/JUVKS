import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store'
import { render } from '@testing-library/react';
import Landing from './Landing';

test('Contains welcome banner', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Landing />, {wrapper: Wrapper});
    const welcomeElement = getByText(/welcome/i, {exact: false});
    expect(welcomeElement).toBeInTheDocument();
  });