const express = require("express");
const app = express();
var cors = require("cors");
const db = require("./utils/database");
const user = require("./routes/auth");
require('dotenv').config();

const port = process.env.PORT

app.use(express.json());
app.use(cors());

db.connect();

app.use("/user", user);

app.listen(port, console.log(`SERVER RUNNING ON PORT ${port}`));
