import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Fetch items from the API on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newItem }),
      });
      const data = await response.json();
      setItems((prevItems) => [...prevItems, data]);
      setNewItem('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Demo Microservice </h1>
      </header>

      <main className="app-main">
        <form onSubmit={handleSubmit} className="item-form">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new item..."
            required
            className="item-input"
          />
          <button type="submit" className="item-button">
            Add Item
          </button>
        </form>

        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item">
              {item.name}
            </li>
          ))}
        </ul>
      </main>

      <footer className="app-footer">
        <p>
          Made with ❤️ for Microservices <br />
          by Prianshu-git
        </p>
      </footer>
    </div>
  );
}

export default App;