const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../dist/angular-project")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
