const express = require('express');
const path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'docs')));

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}\n`);
});

module.exports = app;
