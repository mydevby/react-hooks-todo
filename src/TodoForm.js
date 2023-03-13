import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        className="input"
        variant="outlined"
        placeholder="Добавить задачу"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
