import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store'
import { render } from '@testing-library/react';
import Add from './AddBook';

test('Contains title field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Add />, {wrapper: Wrapper});
    const titleFieldElement = getByPlaceholderText(/Title/i, {exact: false});
    expect(titleFieldElement).toBeInTheDocument();
  });

  test('Contains Author field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Add />, {wrapper: Wrapper});
    const authorFieldElement = getByPlaceholderText(/Author/i, {exact: false});
    expect(authorFieldElement).toBeInTheDocument();
  });

  
  test('Contains Quantity field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByDisplayValue } = render(<Add />, {wrapper: Wrapper});
    const quantityFieldElement = getByDisplayValue(/1/i, {exact: false});
    expect(quantityFieldElement).toBeInTheDocument();
  });

  test('Contains Publisher field', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Add />, {wrapper: Wrapper});
    const publisherFieldElement = getByPlaceholderText(/ISBN/i, {exact: false});
    expect(publisherFieldElement).toBeInTheDocument();
  });

  test('Contains Description feild', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText } = render(<Add />, {wrapper: Wrapper});
    const descriptionFieldElement = getByPlaceholderText(/Description of the book/i, {exact: false});
    expect(descriptionFieldElement).toBeInTheDocument();
  });

  test('Contains Category feild', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByDisplayValue } = render(<Add />, {wrapper: Wrapper});
    const categoryFieldElement = getByDisplayValue(/Open this select menu/i, {exact: false});
    expect(categoryFieldElement).toBeInTheDocument();
  });

  test('Contains Book Status feild', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByDisplayValue } = render(<Add />, {wrapper: Wrapper});
    const statusFieldElement = getByDisplayValue(/Used/i, {exact: false});
    expect(statusFieldElement).toBeInTheDocument();
  });
