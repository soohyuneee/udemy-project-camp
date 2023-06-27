import React, { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <p>What is your main focus for today?</p>
      <input required type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </form>
  );
}

export default TodoForm;
