import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Contains current user information', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Dashboard />, {wrapper: Wrapper});
    const currentUserDetailsElement = getByText(/current user/i, {exact: false});
    expect(currentUserDetailsElement).toBeInTheDocument();
  });

test('Contains add book form', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Dashboard />, {wrapper: Wrapper});
    const addBookElement = getByText(/add book/i, {exact: false});
    expect(addBookElement).toBeInTheDocument();
    expect(addBookElement.nextSibling.className.includes("form-group")).toBe(true);
  });

test('Contains search bar', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<Dashboard />, {wrapper: Wrapper});
    const searchBookElement = getByText(/search/i, {exact: false});
    expect(searchBookElement).toBeInTheDocument();
  });

// test('Contains list of books', () => {
//     const Wrapper = ({ children }) => (
//         // you could just use your normal Redux store or create one just for the test
//         <Provider store={store}>{children}</Provider>
//       );
//     const { getByText } = render(<Dashboard />, {wrapper: Wrapper});
//     const booksListElement = getByText(/list of books/i, {exact: false});
//     expect(booksListElement).toBeInTheDocument();
//   });