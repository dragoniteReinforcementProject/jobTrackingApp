const express = require('express');
const bodyParser = require('body-parser');
const databaseControllers = require('./controllers/databaseControllers.js');
const path = require('path');
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
// serve css and js files
app.use(express.static(path.resolve(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/index.tsx'))
})

app.post('/test', (req, res)=> {
  res.status(200).json(req.body);
})

app.post('/login', databaseControllers.verifyUser, (req, res) => {
  const authenticatedUser = res.locals.user;
  res.status(200).json({ message: 'Login successful', user: authenticatedUser })
});

app.post('/register', databaseControllers.addUser, (req, res) => {
  res.status(200).json({ message: 'User successfully created!' })
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Server Errror: ${err.message}`);
});

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });
