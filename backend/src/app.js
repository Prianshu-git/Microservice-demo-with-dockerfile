const express = require('express');
const app = express();
const cors = require('cors');


// Middleware
app.use(cors());
app.use(express.json());

// Simple in-memory "database"
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name || `Item ${items.length + 1}`
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.get('/api/metadata', (req, res) => {
  res.json({ message: 'Metadata endpoint is working!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing

