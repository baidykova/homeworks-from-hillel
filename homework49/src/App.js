import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      completed: false,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function executionStatus(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setItems(updatedItems);
  }

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              {item.value}
              <button
                className={item.completed ? "completed-btn" : ""}
                onClick={() => executionStatus(item.id)}
              >
                {item.completed ? "незроблена" : "зроблена"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;


