const { json } = require('express');
const db = require('../models/accountModels.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userControllers = {};

userControllers.createTable = (req, res, next) => {
  console.log(req.body.userName)
  const dbQuery = `CREATE TABLE ${req.body.userName}_jobs (job_title text, company text, date date, link text, color integer, notes text, location text, deadline date, salary text, job_application_status text);`
  db.query(dbQuery)
    .then(result => {
      console.log('Table created');
      next();
    })
    .catch(err => {
      return next({
        log: 'Error in create table',
        message: { err: 'Failed to create table.' }
      });
    });
};

userControllers.addUser = (req, res, next) => {
  const userName = req.body.userName;
  const realName = req.body.userRealName;
  const password = req.body.password;
  if (!userName || !realName || !password) {
    return next(new Error(`One of the parameters are undefined, user=${userName}, realname=${realName}, password=${password}`))
  }
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err instanceof Error) {
      next(err);
    }
  const dbQuery = `INSERT INTO USERS (user_name, user_real_name, user_password) VALUES (${req.userName}, ${req.userRealName}, ${hashedPassword});`;
  db.query(dbQuery)
    .then(result => {
      console.log('User added');
      next();
    })
    .catch(err => {
      return next({
        log: 'Error adding user',
        message: { err: 'Failed to create user.' }
      });
    });
  });
}

userControllers.addJob = (req,res,next)=>{
  const dbQuery = `INSERT INTO ${req.body.userName}_jobs (job_title, company, date, link, color, notes, location, deadline, salary, job_application_status) VALUES (${req.body.jobTitle}, ${req.body.company}, ${req.body.date}, ${req.body.link}, ${req.body.color}, ${req.body.notes}, ${req.body.location}, ${req.body.deadline}, ${req.body.salary}, ${req.body.status});`
  db.query(dbQuery)
  .then(result=>{
    console.log('Job added');
    next();
  })
  .catch(err=>{
    return next({
      log: 'Error adding jobs row.',
      message: {err:'Failed to add jobs row.'}
    })
  })
}

userControllers.fetchTable = (req, res, next) => {
  const dbQuery = `SELECT * FROM ${req.body.userName}_jobs`;
  db.query(dbQuery)
    .then(result => {
      console.log('DB Queried');
      res.locals.tableData = result.rows;
      next();
    })
    .catch(err => {
      return next({
        log: 'Error fetching user table.',
        message: { err: 'Failed to fetch table.' }
      });
    });
};

userControllers.fetchJobsTable = (req, res, next) => {
  const dbQuery = `SELECT * FROM jobs${req.body.userName};`;
  db.query(dbQuery)
    .then(result => {
      console.log('DB Queried');
      res.locals.tableData = result.rows;
      next();
    })
    .catch(err => {
      return next({
        log: "Error fetching user's jobs table.",
        message: { err: "Failed to fetch user's jobs table." }
      });
    });
};

userControllers.verifyUser = async (req, res, next) => {
  // check for undefined
  const userName = req.body.userName;
  const password = req.body.password;
  if (!userName || !password) {
    return next(new Error(`One of the parameters are undefined, userName=${userName}, password=${password}`))
  }
  console.log(userName, password)
  try {
    // Fetch the user from the database based on the provided username
    const query = 'SELECT user_name, user_password FROM USERS WHERE user_name = $1';
    const result = await db.query(query, [userName]);

    if (result.rows.length === 0) {
      return next(new Error(`result.rows.length is equal to 0`))
    }

    const user = result.rows[0];
    const hashedPassword = user.user_password;
    console.log("This is in verifyUser: ", user, password, hashedPassword);

    // Compare the provided password with the hashed password from the database
    let passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      // Passwords successfully match and the user is authenticated
      res.locals.user = user;
      next();
    } else {
      // Passwords do not match, authentication failed
      return next(new Error(`Password does not match: ${passwordMatch}`))
     
    }
  } catch (error) {
    console.error('Error durring password comparison:', error);
    return next(error);
  }
}

module.exports = userControllers;