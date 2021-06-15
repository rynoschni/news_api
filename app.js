const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
require('dotenv').config();

const port = 3000;


app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(require('./routes/index'));

app.listen(port, () => {
  console.log(`YO JOE! Coming in hot on http://localhost:${port}`)
});
