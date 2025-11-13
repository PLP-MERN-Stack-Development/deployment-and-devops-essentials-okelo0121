import React from 'react';

function TodoList({ todos, onUpdate, onDelete }) {
  const toggleComplete = (todo) => {
    onUpdate(todo._id, { ...todo, completed: !todo.completed });
  };

  return (
    <div className="todo-list">
      <h2>Your Todos</h2>
      {todos.length === 0 ? (
        <p>No todos yet. Add one above!</p>
      ) : (
        todos.map(todo => (
          <div key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
              <h3>{todo.title}</h3>
              {todo.description && <p>{todo.description}</p>}
              <small>Created: {new Date(todo.createdAt).toLocaleDateString()}</small>
            </div>
            <div className="todo-actions">
              <button onClick={() => toggleComplete(todo)}>
                {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => onDelete(todo._id)} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
