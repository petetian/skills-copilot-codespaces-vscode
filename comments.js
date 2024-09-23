// Create web server
// 1. Load express
// 2. Create an express app
// 3. Create a route to get all comments
// 4. Create a route to get a comment by ID
// 5. Create a route to create a new comment
// 6. Create a route to update a comment
// 7. Create a route to delete a comment
// 8. Listen on port 3000

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const comments = [
  {
    id: 1,
    username: 'Alice',
    text: 'I love this!'
  },
  {
    id: 2,
    username: 'Bob',
    text: 'This is the worst