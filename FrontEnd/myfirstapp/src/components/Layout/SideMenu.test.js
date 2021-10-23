import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store'
import { render } from '@testing-library/react';
import  SideMenu from './SideMenu';


test('Contains Manage User Button', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<SideMenu />, {wrapper: Wrapper});
    const manageUserButtonElement = getByText(/Manage Users/i, {exact: false});
    expect(manageUserButtonElement).toBeInTheDocument();
});

test('Contains Upgrade Requests', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<SideMenu />, {wrapper: Wrapper});
    const upgradeRequestButtonElement = getByText(/Upgrade Requests/i, {exact: false});
    expect(upgradeRequestButtonElement).toBeInTheDocument();
});

test('Manage Products', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<SideMenu />, {wrapper: Wrapper});
    const manageProductButtonElement = getByText(/Manage Prodcuts/i, {exact: false});
    expect(manageProductButtonElement).toBeInTheDocument();
});

test('Manage Orders', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<SideMenu />, {wrapper: Wrapper});
    const manageOrderButtonElement = getByText(/Manage Orders/i, {exact: false});
    expect(manageOrderButtonElement).toBeInTheDocument();
});

test('Manage Transactions', () => {
    const Wrapper = ({ children }) => (
        // you could just use your normal Redux store or create one just for the test
        <Provider store={store}>{children}</Provider>
      );
    const { getByText } = render(<SideMenu />, {wrapper: Wrapper});
    const manageTransactionsElement = getByText(/Manage Transactions/i, {exact: false});
    expect(manageTransactionsElement).toBeInTheDocument();
});