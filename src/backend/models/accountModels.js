const {Pool} = require("pg");
const PG_URI =
  "postgres://hefpjgpd:0mPjldn8zE3uKVlFQs2B-kbqe95iGKVy@bubble.db.elephantsql.com/hefpjgpd";
const pool = new Pool({
  connectionString: PG_URI,
});
console.log("DB Connected");

module.exports = {
  query: (text, params) => {
    console.log("executed query", text);
    return pool.query(text, params);
  },
};
// jobs table, settings table, user table, actions table?
