import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('Contains copyright', () => {
    const { getByText } = render(<Footer />);
    const copyrightElement = getByText(/2021 Bookeroo. All rights reserved./i, {exact: false});
    expect(copyrightElement).toBeInTheDocument();
  });
  
test('Contains footer element', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/2021 Bookeroo. All rights reserved./i, {exact: false}).parentElement;
    expect(footerElement.className.includes("footer"));
});