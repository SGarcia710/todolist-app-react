import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditTodoForm({ id, initialValue, editTodo, toggle }) {
  const [value, handleChange, reset] = useInputState(initialValue);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
}

export default EditTodoForm;
