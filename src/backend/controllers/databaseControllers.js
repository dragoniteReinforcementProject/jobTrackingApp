const { json } = require('express');
const db = require('../models/accountModels.js');

const databaseControllers = {};

databaseControllers.createTable = (req, res, next) => {
  const dbQuery = `CREATE TABLE ${req.userName}Jobs (job_name text, job_application_status text, job_type text);`;
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

databaseControllers.addUser = (req, res, next) => {
  const dbQuery = `INSERT INTO USERS (user_name, user_real_name, user_password) VALUES (${req.userName}, ${req.userRealName}, ${req.password});`;
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
};

databaseControllers.fetchTable = (req, res, next) => {
  const dbQuery = `SELECT * FROM USERS WHERE user_name = ${req.userName};`;
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

databaseControllers.fetchJobsTable = (req, res, next) => {
  const dbQuery = `SELECT * FROM jobs${req.userID};`;
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
