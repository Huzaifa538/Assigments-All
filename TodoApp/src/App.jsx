import { useState } from "react";
import "./App.css"; 

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function readInputValue(event) {
    const value = event.target.value;
    setInput(value);
  }

  function addTodo() {
    if (!input) return alert("Todo is Required");

    if (editIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editIndex] = input;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, input]);
    }

    setInput("");
  }

  function deleteTodo(index) {
    const copyList = [...todoList];
    copyList.splice(index, 1);
    setTodoList(copyList);
  }

  function editTodo(index) {
    setInput(todoList[index]);
    setEditIndex(index);
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">Todo App</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a todo..."
            value={input}
            onChange={readInputValue}
          />
          <button className="add-btn" onClick={addTodo}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {todoList.length === 0 ? (
          <p className="no-todos">No todos yet</p>
        ) : (
          <ul className="todo-list">
            {todoList.map((todo, index) => (
              <li key={index} className="todo-item">
                <span>{todo}</span>
                <div className="actions">
                  <button className="edit-btn" onClick={() => editTodo(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
