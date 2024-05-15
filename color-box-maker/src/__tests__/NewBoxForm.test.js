import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
  render(<NewBoxForm addBox={() => {}} />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('can fill out the form', () => {
  const { getByLabelText } = render(<NewBoxForm addBox={() => {}} />);
  const widthInput = getByLabelText('Width');
  const heightInput = getByLabelText('Height');
  const backgroundColorInput = getByLabelText('Background Color');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(backgroundColorInput, { target: { value: 'blue' } });

  expect(widthInput.value).toBe('100');
  expect(heightInput.value).toBe('100');
  expect(backgroundColorInput.value).toBe('blue');
});
