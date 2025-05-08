// Import the Express library
const express = require('express');

// Create an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World! This is a sample Express app.');
});

// Another route (optional)
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});