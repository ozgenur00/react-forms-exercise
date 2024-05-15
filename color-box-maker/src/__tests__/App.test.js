import { render } from '@testing-library/react';
import app from './App';

it('render without crashing', () => {
    render(<App />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});