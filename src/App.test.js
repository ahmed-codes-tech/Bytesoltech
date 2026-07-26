import { render, screen } from '@testing-library/react';
import App from './App';

// This was the unedited Create React App default test, checking for text
// that doesn't exist in this project. Replaced with a real smoke test.
// TODO: expand coverage as real pages/routes are added (Phase 1+).
test('renders the Bytesoltech navbar without crashing', () => {
  render(<App />);
  const ctaButton = screen.getByRole('button', { name: /book a free call/i });
  expect(ctaButton).toBeInTheDocument();
});