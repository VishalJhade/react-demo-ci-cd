import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeDefined();
  });
});
