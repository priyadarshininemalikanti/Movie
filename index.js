 const express = require("express");
const body = require("body-parser");

const dotenv = require("dotenv");
const auth = require("./routess/auth");
const app = express();

dotenv.config();

const connection = require("./database/db.js");

app.use(body.json({ extended: true }));
app.use(body.urlencoded({ extended: true }));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);


app.use("/end",auth);

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});