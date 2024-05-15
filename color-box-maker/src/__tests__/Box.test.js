import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', () => {
  render(<Box id="1" width="100" height="100" backgroundColor="blue" removeBox={() => {}} />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Box id="1" width="100" height="100" backgroundColor="blue" removeBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls removeBox on button click', () => {
  const removeBoxMock = jest.fn();
  const { getByText } = render(<Box id="1" width="100" height="100" backgroundColor="blue" removeBox={removeBoxMock} />);
  fireEvent.click(getByText('X'));
  expect(removeBoxMock).toHaveBeenCalled();
});
