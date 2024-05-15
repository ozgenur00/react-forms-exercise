import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

it('renders without crashing', () => {
  render(<Todo id="1" task="Test Todo" removeTodo={() => {}} />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Todo id="1" task="Test Todo" removeTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls removeTodo on button click', () => {
  const removeTodoMock = jest.fn();
  const { getByText } = render(<Todo id="1" task="Test Todo" removeTodo={removeTodoMock} />);
  fireEvent.click(getByText('X'));
  expect(removeTodoMock).toHaveBeenCalled();
});
