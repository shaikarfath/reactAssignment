import { render, screen } from '@testing-library/react';
import TextForCards from './Textcards';

test('Text for card', () => {
  render(<TextForCards />);
  const linkElement = screen.getByText(/Text from card/i);
  expect(linkElement).toBeInTheDocument();
});

test('CardNum', () => {
    render(<TextForCards cardNum = {1} />);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
    render(<TextForCards cardNum = {2} />);
    const linkElement2 = screen.getByText(/2/i);
    expect(linkElement2).toBeInTheDocument();
    render(<TextForCards cardNum = {3} />);
    const linkElement3 = screen.getByText(/3/i);
    expect(linkElement3).toBeInTheDocument();
    render(<TextForCards cardNum = {4} />);
    const linkElement4 = screen.getByText(/4/i);
    expect(linkElement4).toBeInTheDocument();
    render(<TextForCards cardNum = {5} />);
    const linkElement5 = screen.getByText(/5/i);
    expect(linkElement5).toBeInTheDocument();
    render(<TextForCards cardNum = {6} />);
    const linkElement6 = screen.getByText(/6/i);
    expect(linkElement6).toBeInTheDocument();
  });