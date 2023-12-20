const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./controllers.js');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve css and js files
app.use(express.static(path.resolve(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/index.tsx'))
})

app.post('/login', Controller.verifyUser, (req, res) => {
  const authenticatedUser = req.user;
  res.status(200).json({ message: 'Login successful', user: authenticatedUser })
});

app.post('/register', Controller.addUser, (req, res) => {
  res.status(200).json({ message: 'User successfully created!' })
})

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });
