const {Pool} = require("pg");
const PG_URI =
  "postgres://hefpjgpd:0mPjldn8zE3uKVlFQs2B-kbqe95iGKVy@bubble.db.elephantsql.com/hefpjgpd";
const pool = new Pool({
  connectionString: PG_URI,
});
console.log("DB Queried");
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
// jobs table, settings table, user table, actions table?
