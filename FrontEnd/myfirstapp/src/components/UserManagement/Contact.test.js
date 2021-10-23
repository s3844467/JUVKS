import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store'
import { render } from '@testing-library/react';
import Contact from './Contact'; 


test('Contains name textfeild', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText} = render(<Contact />, {wrapper: Wrapper});
    const nameElement = getByPlaceholderText(/Name/i, {exact: false}); 
    expect(nameElement).toBeInTheDocument();
  });


  test('Contains email address textfeild', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText} = render(<Contact />, {wrapper: Wrapper});
    const emailElement = getByPlaceholderText(/Email Address/i, {exact: false}); 
    expect(emailElement).toBeInTheDocument();
  });
  

  test('Contains subject textfeild', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText} = render(<Contact />, {wrapper: Wrapper});
    const subjectElement = getByPlaceholderText(/Subject/i, {exact: false}); 
    expect(subjectElement).toBeInTheDocument();
  });
  
  test('Contains message textfeild', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByPlaceholderText} = render(<Contact />, {wrapper: Wrapper});
    const messageElement = getByPlaceholderText(/Message/i, {exact: false}); 
    expect(messageElement).toBeInTheDocument();
  });
  
  

