import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('can fill out the form', () => {
  const { getByLabelText } = render(<NewTodoForm addTodo={() => {}} />);
  const taskInput = getByLabelText('Task');

  fireEvent.change(taskInput, { target: { value: 'Test Todo' } });

  expect(taskInput.value).toBe('Test Todo');
});
