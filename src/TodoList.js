import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newEstimatedTime, setNewEstimatedTime] = useState(''); // State for estimated time
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const estimatedTime = parseInt(newEstimatedTime) || 0; // Parse estimated time as an integer
    const todo = { id: String(Date.now()), text: newTodo, completed: false, dueDate: newDueDate, estimatedTime };
    setTodos([...todos, todo]);
    setNewTodo('');
    setNewDueDate('');
    setNewEstimatedTime(''); // Clear the estimated time input
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCompletion = (id) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      setTodos(updatedTodos);
    }
  };

  const editTask = (id, newText) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.find((t) => t.id === id);
    if (todo) {
      todo.text = newText;
      setTodos(updatedTodos);
      setEditTodo(null);
    }
  };

  const totalEstimatedTime = todos.reduce((total, todo) => total + todo.estimatedTime, 0);

  return (
    <div>
      <h2>To-do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter Todo Here"
      />
      <input
        type="text"
        value={newDueDate}
        onChange={(e) => setNewDueDate(e.target.value)}
        placeholder="Due Date (optional)"
      />
      <input
        type="number" // Input for estimated time
        value={newEstimatedTime}
        onChange={(e) => setNewEstimatedTime(e.target.value)}
        placeholder="Estimated Time(min)"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodo === todo.id ? (
              <div>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => editTask(todo.id, e.target.value)}
                />
                <button onClick={() => setEditTodo(null)}>Done</button>
              </div>
            ) : (
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompletion(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                <span style={{ marginLeft: '10px' }}>Due: {todo.dueDate}</span>
                <span style={{ marginLeft: '10px' }}>Estimated Time: {todo.estimatedTime} minutes</span>
                <button onClick={() => setEditTodo(todo.id)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <p style={{ fontFamily: 'Courier' }} >Total Estimated Time for All Assignments: {totalEstimatedTime} minutes</p>
    </div>
  );
};

export default TodoList;
