const express = require('express');
const bodyParser = require('body-parser');
const userControllers = require('./controllers/userControllers.js');
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

app.post('/test', (req, res)=> {
  res.status(200).json(req.body);
})

app.post('/login', userControllers.verifyUser, (req, res) => {
  const authenticatedUser = res.locals.user;
  res.status(200).json({ message: 'Login successful', user: authenticatedUser })
});

app.post('/register', userControllers.addUser, (req, res) => {
  res.status(200).json({ message: 'User successfully created!' })
})
app.post('/createJobs', userControllers.createTable, (req, res)=>{
  //req.body.userName example: Code_Monkey NOT 'Code_Monkey'
  res.status(200).json({ message: 'Table created successfully!'})
})
app.post('/updateJobs', userControllers.addJob, (req, res)=>{
  /**
   * Example use: no single quotes on userName, single quotes on all other strings.
   * {"userName":"Mode_Conkey",
"jobTitle":"'Code Monkey'",
"company":"'Googol'",
"date":"'2023-12-20'",
"link":"'www.google.com'",
"color":150,
"notes":"'I am tired'",
"location":"'Deep underground'",
"deadline":"'2024-01-01'",
"salary":"'USD$ 7.50'",
"status":"'Rejected'"
}
   */
  res.status(200).json(req.body)
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Server Errror: ${err.message}`);
});

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });
