require('dotenv').config();

const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiroutes/apiRoutes')
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/", apiRoutes)
app.use(express.static(path.join(__dirname, "../dist/angular-project")));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "../dist/angular-project/index.html")));
  }
);

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
