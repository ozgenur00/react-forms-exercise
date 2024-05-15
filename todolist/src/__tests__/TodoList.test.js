import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new todo', () => {
  const { getByLabelText, getByText } = render(<TodoList />);
  const taskInput = getByLabelText('Task');
  const addButton = getByText('Add Todo');

  fireEvent.change(taskInput, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  expect(getByText('Test Todo')).toBeInTheDocument();
});

it('can remove a todo', () => {
  const { getByLabelText, getByText, queryByText } = render(<TodoList />);
  const taskInput = getByLabelText('Task');
  const addButton = getByText('Add Todo');

  fireEvent.change(taskInput, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  expect(getByText('Test Todo')).toBeInTheDocument();

  fireEvent.click(getByText('X'));

  expect(queryByText('Test Todo')).not.toBeInTheDocument();
});
