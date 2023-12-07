const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRoutes = require("./routes/login");
const chatRoutes = require("./routes/chat");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRoutes);
app.use(chatRoutes);
app.listen(3000);
