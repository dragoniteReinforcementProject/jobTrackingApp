import * as bcrypt from 'bcryptjs';
import * as db from './model';
import { Pool, QueryResult } from 'pg';
import type { Request, Response, NextFunction } from 'express';
const saltRounds = 10;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI
});

const Controller = {

  verifyUser: async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    try {
      // Fetch the user from the database based on the provided username
      // waiting for Pedro
      const query = 'SELECT id, user_name, user_password FROM USERS WHERE user_name = $1';
      const result = await pool.query(query, [username]);

      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = result.rows[0];
      const hashedPassword = user.user_password;

      // Compare the provided password with the hashed password from the database
      const passwordMatch: boolean = await bcrypt.compare(password, hashedPassword);

      if (passwordMatch) {
        // Passwords successfully match and the user is authenticated
        (req as any).user = user;
        next();
      } else {
        // Passwords do not match, authentication failed
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error durring password comparison:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  },

  addUser: (req: Request, res: Response, next: NextFunction) => {
    bcrypt.hash((req as any).password, saltRounds, (err, hashedPassword) => {
      if (err instanceof Error) {
        next(err);
      }
      const dbQuery = `INSERT INTO USERS (user_name, user_real_name, user_password) VALUES (${(req as any).userName}, ${(req as any).userRealName}, ${hashedPassword});`;
      db.query(dbQuery)
        .then(result => {
          console.log('User added');
          next();
        })
        .catch((err: Error) => {
          next(err);
        });
    })
  }
};

module.exports = Controller;
