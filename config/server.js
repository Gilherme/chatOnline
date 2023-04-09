let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

let app = express();

app.set('views engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}))


consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app
